import jwt, { JwtPayload } from 'jsonwebtoken'
import { SETTINGS } from '../settings'
import { ObjectId } from 'mongodb'
import { usersRepository } from '../features/users/usersRepository'

export const jwtService = {
    async createToken(userId: string): Promise<string> {
        const user = await usersRepository.getUserById(userId)
        console.log('user ', user);

        return jwt.sign(
            {
                user: {
                    login: user?.login,
                    userId: user?._id.toString()
                }
            },
            SETTINGS.AC_SECRET,
            {
                expiresIn: SETTINGS.AC_TIME
            }
        )
    },

    getUserIdByToken(token: string): string | null {
        try {
            const result = jwt.verify(token, SETTINGS.AC_SECRET) as JwtPayload

            return result.user.userId
        } catch (error) {
            return null
        }
    },

}
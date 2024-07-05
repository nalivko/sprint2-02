import { usersRepository } from "../../users/usersRepository"
import bcrypt from 'bcrypt'

export const authService = {
    async login(loginOrEmail: string, password: string): Promise<boolean> {
        return await this.checkCredentials(loginOrEmail, password)
    },

    async checkCredentials(loginOrEmail: string, password: string): Promise<boolean> {
        const user =  await usersRepository.findUserByLoginOrEmail(loginOrEmail)

        if (!user) return false

        const isCorrect = await bcrypt.compare(password, user.passwordHash)

        return isCorrect
    }
}
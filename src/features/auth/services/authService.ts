import { usersRepository } from "../../users/usersRepository"

export const authService = {
    async login(loginOrEmail: string, password: string) {
        return await usersRepository.findUserByLoginOrEmail(loginOrEmail)
    }
}
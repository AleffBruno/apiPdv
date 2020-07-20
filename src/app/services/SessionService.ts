import { getRepository } from "typeorm";
import { User } from "../models/User";
import * as bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from '../../config/auth';
import AppError from '../../errors/AppError';
interface RequestDTO {
    email: string,
    password: string
}

interface ResponseDTO {
    user: User,
    token: string
}

class SessionService {
    public async login({email, password} : RequestDTO) : Promise<ResponseDTO> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({where: {email} });

        if(!user) {
            throw new AppError('Incorrect email/password combination.', 401);
        }

        const passwordMatched = await bcrypt.compare(password, user.password);

        if(!passwordMatched) {
            throw new AppError('Incorrect email/password combination.', 401);
        }

        const token = sign(
            { userId: user.id },
            <string>authConfig.secret,
            { subject: user.id.toString(), expiresIn: authConfig.expiresIn }
        );

        return {
            user,
            token
        }
    }
}

export default SessionService;
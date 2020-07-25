// import dotenv from "dotenv";
// dotenv.config();  

// export const getUsers = () => {
//     return "getUsers"
// };
import { User } from '../models/User';
import * as bcrypt from "bcryptjs";
import uploadConfig from '../../config/upload';
import path from 'path';
import fs from 'fs';
import AppError from '../../errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

interface updateUserAvatarRequestDTO {
    user_id: number,
    avatarFilename: string
}

class UserService {

    constructor(private userRepository: IUsersRepository) {}

    public getUsers() : Promise<User[]> {
        // let userRepository = getConnection().getRepository(User);
        return this.userRepository.getAll(); // ta faltando await?
    }

    public async create({ name, email, password, commission, phone } : ICreateUserDTO) : Promise<User> {
        // const userRepository = getRepository(User);
        const userExists = await this.userRepository.findByEmail(email);

        if(userExists) {
            throw new AppError('email aready exists');
        }

        const hashedPassword = await bcrypt.hash(password, 8);

        const user = await this.userRepository.create({
            name,
            email,
            password: hashedPassword,
            commission,
            phone
        });
        // const user = new User();
        // user.email = email;
        // user.password = hashedPassword;
        // user.isAdmin = false;
        // user.name = name;
        // user.phone = phone;
        // user.commission = commission;
        // await this.userRepository.save(user);

        return user;
    }

    public async updateUserAvatar({ user_id , avatarFilename } : updateUserAvatarRequestDTO ) : Promise<User> {

        const user = await this.userRepository.findById(user_id);

        if(!user) {
            throw new AppError('Only authenticated users can change avatar', 401);
        }

        if(user.avatar) {
            // deleta avatar anterior;
            const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
            const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

            if(userAvatarFileExists) {
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        user.avatar = avatarFilename;

        await this.userRepository.save(user);

        return user;
    }
}

export default UserService;
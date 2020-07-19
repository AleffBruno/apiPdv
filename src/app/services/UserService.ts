// import dotenv from "dotenv";
// dotenv.config();  

// export const getUsers = () => {
//     return "getUsers"
// };
import { User } from '../models/User';
import { getRepository, Repository } from 'typeorm';
import * as bcrypt from "bcryptjs";
import uploadConfig from '../../config/upload';
import path from 'path';
import fs from 'fs';

interface createRequestDTO {
    name: string,
    email: string,
    password: string,
    commission: string,
    phone: string
}

interface updateUserAvatarRequestDTO {
    user_id: number,
    avatarFilename: string
}

class UserService {
    private userRepository : Repository<User>;

    constructor() {
        this.userRepository = getRepository(User);
    }

    public getUsers() : Promise<User[]> {
        // let userRepository = getConnection().getRepository(User);
        return this.userRepository.find({}); // ta faltando await?
    }

    public async create({ name, email, password, commission, phone } : createRequestDTO) : Promise<User> {
        // const userRepository = getRepository(User);
        const userExists = await this.userRepository.findOne({where:{email: email}});

        if(userExists) {
            throw Error('email aready exists');
        }

        const hashedPassword = await bcrypt.hash(password, 8);

        const user = new User();
        user.email = email;
        user.password = hashedPassword;
        user.isAdmin = false;
        user.name = name;
        user.phone = phone;
        user.commission = commission;

        await this.userRepository.save(user);

        return user;
    }

    public async updateUserAvatar({ user_id , avatarFilename } : updateUserAvatarRequestDTO ) : Promise<User> {

        const user = await this.userRepository.findOne(user_id);

        if(!user) {
            throw new Error('Only authenticated users can change avatar');
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
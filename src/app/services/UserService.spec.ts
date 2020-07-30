import UserService from './UserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
// import * as bcrypt from "bcryptjs";

describe('User', () => {
    it('should to be able to create a new user', async () => {
        const fakeUsersRepository = new FakeUsersRepository();
        const userService = new UserService(fakeUsersRepository);

        const user = await userService.create({
            name: 'jose',
            commission: '0',
            email: 'jose@jose.com',
            password: '123',
            phone: '99999'
        });

        expect(user).toHaveProperty('id');
        expect(user.email).toBe('jose@jose.com');
    })
    
    // it('should not be able to create two user with the same email', () => {
    //     expect(1 + 2).toBe(3);
    // })
})

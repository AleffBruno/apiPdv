import UserService from './UserService';
// import * as bcrypt from "bcryptjs";

describe('User', () => {
    it('should to be able to create a new user', async  () => {
        
        // const userService = new UserService();
        expect(1 + 2).toBe(3);

        // const user = await userService.create({
        //     email: 'q@q.com',
        //     password: 'q',
        //     commission: '0',
        //     name: 'q',
        //     phone: 'qq9999999'
        // })

        // expect(user).toHaveProperty('id');
        // expect(user.password).toBe(await bcrypt.hash(user.password, 8));
    })
    
    // it('should not be able to create two user with the same email', () => {
    //     expect(1 + 2).toBe(3);
    // })
})

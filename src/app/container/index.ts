import { container } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import UsersRepository from '../infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
);

//para registar mais injeções, basta seguir o modelo abaixo
// container.registerSingleton<IUsersRepository>(
//     'UsersRepository',
//     UsersRepository
// );


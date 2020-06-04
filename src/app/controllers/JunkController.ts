import { Request, Response } from "express";
import { getConnection } from "typeorm";

import { User } from "../models/User";
import { Company } from "../models/Company";
import { Address } from "../models/Address";
import { City } from "../models/City";
import { State } from "../models/State";

class JunkController{
    public junk = async (req:Request, res:Response) => {

        //cria usuario
        let userRepository = await getConnection().getRepository(User);
        const user = new User();
        user.name = "jose";
        user.email = "j@j.com";
        user.password = user.hashPassword("123456");
        user.isAdmin = false;
        user.commission = "33.33";
        user.phone = "(11) 1 1111 111";
        await userRepository.save(user);

        //cria company
        let companyRepository = await getConnection().getRepository(Company);
        const company = new Company();
        company.name = "Loja001";
        company.email = "l@l.com";
        company.cpfCnpj = "9999999";
        company.phone = "(11) 1 1111 111";
        company.masterPassword = "semHashPorEnquanto";
        await companyRepository.save(company);

        //associa usuario com a companyCriada
        user.company = company;
        await userRepository.save(user);
        
        //cria address
        let addressRepository = await getConnection().getRepository(Address);
        const address = new Address();
        address.neighborhood = "bairro";
        address.cep = "11111111";
        address.street = "rua xxxx";
        address.number = "1";
        address.complement = "complemento1";

        //pega o estato com id 1 cadastrado no banco
        let stateRepository = await getConnection().getRepository(State);
        const state = await stateRepository.findOneOrFail({where:{id:1}});
        if(!state) {
            const newState = new State();
            newState.name = "CE_DEV";
            await stateRepository.save(newState);
        }

        //pega a cidade com id 1 cadastrado no banco
        let cityRepository = await getConnection().getRepository(City);
        const city = await cityRepository.findOneOrFail({where:{id:1}});
        if(!city) {
            const newCity = new City();
            newCity.name = "FOR_DEV";
            await cityRepository.save(newCity);
        }

        //associa state/city com address
        address.city = city;
        address.state = state;
        await addressRepository.save(address);


        return res.json(address);
    };
}

export default new JunkController();
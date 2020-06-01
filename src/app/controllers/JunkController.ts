import { Request, Response } from "express";
import { getConnection } from "typeorm";

import { User } from "../models/User";
import { Company } from "../models/Company";



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
        

        return res.json(user);
    };
}

export default new JunkController();

import { getConnection } from 'typeorm';
import { Company } from '../models/Company';
import { Request } from "express";

export const create = async (req : Request) => {

    const { name, email, cpfCnpj, phone, masterPassword } = req.body;

    let companyRepository = await getConnection().getRepository(Company);

    const company = new Company();
    company.name = name;
    company.email = email;
    company.cpfCnpj = cpfCnpj;
    company.phone = phone;
    company.masterPassword = masterPassword;

    await companyRepository.save(company);

    return company;
};
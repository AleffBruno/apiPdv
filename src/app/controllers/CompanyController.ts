// import {Photo} from "../models/Photo";

import { Request, Response } from "express";
import { create } from '../services/CompanyService';

class CompanyController {
    public create = async (request:Request, response:Response) => {

        const company = await create(request);
        
        return response.json(company);

    };
}

export default new CompanyController();
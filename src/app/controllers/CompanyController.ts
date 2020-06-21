// import {Photo} from "../models/Photo";

import { Request, Response } from "express";
import { create } from '../services/CompanyService';

class CompanyController {
    public create = async (req:Request, res:Response) => {

        const company = await create(req);
        
        return res.json(company);

    };
}

export default new CompanyController();
import { Request, Response } from "express";
import { getConnection } from "typeorm";

import { User } from "../models/User";
import { Company } from "../models/Company";
import { Address } from "../models/Address";
import { City } from "../models/City";
import { State } from "../models/State";
import { ProductPhoto } from "../models/ProductPhoto";
import { Product } from "../models/Product";
import { Pcategory } from "../models/Pcategory";

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

        //cria address
        let addressRepository = await getConnection().getRepository(Address);
        const address = new Address();
        address.neighborhood = "bairro";
        address.cep = "11111111";
        address.street = "rua xxxx";
        address.number = "1";
        address.complement = "complemento1";

        //cria um state
        let stateRepository = await getConnection().getRepository(State);
        const state = new State();
        state.name = "CE_DEV";
        await stateRepository.save(state);

        //cria uma city
        let cityRepository = await getConnection().getRepository(City);
        const city = new City();
        city.name = "FOR_DEV";
        await cityRepository.save(city);

        //associa state/city com address
        address.city = city;
        address.state = state;
        await addressRepository.save(address);

        //cria company
        let companyRepository = await getConnection().getRepository(Company);
        const company = new Company();
        company.name = "Loja001";
        company.email = "l@l.com";
        company.cpfCnpj = "9999999";
        company.phone = "(11) 1 1111 111";
        company.masterPassword = "semHashPorEnquanto";
        //associa o adress com a company
        company.address = address;
        await companyRepository.save(company);

        //pesquisa company e traz o address relacionado
        const companyWithAddress = await companyRepository.findOne({
            relations: ["address"],
            where: {
              id: company.id
            }
        });

        //pesquisa address e traz o company relacionado
        const addressWithCompany = await addressRepository.findOne({
            relations: ["company"],
            where: {
              id: 2
            }
        });

        //associa usuario com a companyCriada
        user.company = company;
        await userRepository.save(user);
        
        //cria um produto
        let productRepository = await getConnection().getRepository(Product);
        const product = new Product();
        product.name = "produto1";
        product.code = "1";
        product.salePrice = 10.00;
        product.costPrice = 7.00;
        product.canEditValue = true;
        product.barCode = "9034837498451";
        product.unit = "caixa";
        product.minStock = 1;
        product.controlStock = true;
        product.observations = "nada";
        product.showProductOnline = true;
        product.netWeight = "1.1";
        product.grossWeight = "2.2";
        product.catalogDescription = "sem descricao";
        product.hasVariation = false;
        product.productGeneratesCommision = true;
        product.company = company;
        await productRepository.save(product);
        
        // cria uma foto de produto
        let productPhotoRepository = await getConnection().getRepository(ProductPhoto);
        const productPhoto = new ProductPhoto();
        productPhoto.image = "111";
        productPhoto.originalName = "originalName";
        //associa a foto com o produto
        productPhoto.product = product;
        await productPhotoRepository.save(productPhoto);

        // cria mais uma foto de produto
        const productPhoto2 = new ProductPhoto();
        productPhoto2.image = "111";
        productPhoto2.originalName = "originalName";
        //associa a foto com o produto
        productPhoto2.product = product;
        await productPhotoRepository.save(productPhoto2);

        //pesquisa produto e traz as fotos relacionadas
        const productWithPhotos = await productRepository.findOne({
            relations: ["productPhotos"],
            where: {
              id: product.id
            }
        });

        //cria uma categoria de produto;
        let pcategoryRepository = await getConnection().getRepository(Pcategory);
        const pcategory = new Pcategory();
        pcategory.name = "Geral";
        pcategory.showOnline = true;
        //associa a categoria de produto com a company criada acima
        pcategory.company = company;
        await pcategoryRepository.save(pcategory);


        return res.json(pcategory);
    };
}

export default new JunkController();
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import authConfig from '../../config/auth';
// import config from "../config/config";
import AppError from '../../errors/AppError';

export const checkJwt = (request: Request, response: Response, next: NextFunction) => {
  //Get the jwt token from the head
  //verificar outros headers como Authorization / retirar o Bearer......
  const bearerToken = <string>request.headers["auth"] || <string>request.headers.authorization || <string>request.headers['Authorization'];

  if (!bearerToken) {
    // return response.status(401).json({error:'token not provided'})
    // nao estou dando 'response.status(401).json()' por causa do padrão "Exception Handler"
    throw new AppError('token not provided', 401);
  }

  const [,token] = bearerToken.split(' '); // splita o "Bearer" do token, e pega somente o token

  let jwtPayload;
  
  //Try to validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(token, <string>authConfig.secret);
    
    response.locals.jwtPayload = jwtPayload;
    next();
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    // response.status(401).json({msg:"401 - nao autorizado"});
    // return response.status(401).json({error:'token invalid'})
    // nao estou dando 'response.status(401).json()' por causa do padrão "Exception Handler"
    throw new AppError('token invalid', 401);
  }


  // SE QUISER ENVIAR UM NOVO TOKEN A CADA NOVO REQUEST, DESCOMENTE ESSE CODIGO, E RETIRE O 'next();' ACIMA
  //We want to send a new token on every request
  // const { userId, username } = jwtPayload;
  // const newToken = jwt.sign({ userId, username }, <string>authConfig.secret, {
  //   expiresIn: authConfig.expiresIn
  // });
  // response.setHeader("token", newToken);

  // next();
};
import { NextFunction, Request, Response } from "express";
import { Superheroe } from "../models/superheroe";
import { SuperheroeRespositoryMongo } from "../repository/superheroeRepository";


const getById = (req: Request, res: Response, next: NextFunction) => {
    const marvelId = req.params.marvelId;
};

const getByName = (req: Request, res: Response, next: NextFunction) => {
    const marvelId = req.params.marvelId;
};

export default { getById, getByName };



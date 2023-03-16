import { Request, Response } from "express";
import { SuperheroeRespositoryMongo } from "../repository/superheroeRepository";

const getById = async (req: Request, res: Response): Promise<void> => {

    const marvelId = parseInt(req.params.marvelId)

    if(isNaN(marvelId)) {
        res.status(400).json({ message: 'Invalid Id' });
        return;
    }
    
    const repository = new SuperheroeRespositoryMongo()

    const superheroe = await repository.getById(marvelId)

    if (superheroe.length === 0){
        res.status(204).json( {message: "No content"} )
        return
    }
    
    res.status(200).json(superheroe)
    return
};

const getByName = async (req: Request, res: Response): Promise<void> => {
    const name = req.params.name;
    const repository = new SuperheroeRespositoryMongo()

    const superheroe = await repository.getByName(name) 

    res.status(200).json(superheroe)
    return
};

export default { getById, getByName }



import { Superheroe, iSuperheroeModel } from "../models/superheroe";

export interface iSuperheroeRespository {
    getById(marvelId: Number): Promise<iSuperheroeModel[]>
    getByName(name: String): Promise<iSuperheroeModel[]>
}

export class SuperheroeRespositoryMongo implements iSuperheroeRespository{

    public async getById(marvelId: Number): Promise<iSuperheroeModel[]>{
        const superheroe = await Superheroe.find({ marvelId }).exec()
        return superheroe
    }

    public async getByName(name: String): Promise<iSuperheroeModel[]>{
        const superheroe = await Superheroe.find({ name }).exec()
        return superheroe
    }

}



import { Superheroe, iSuperheroeModel } from "../models/superheroe";

export interface iSuperheroeRespository {
    getById(id: Number): Promise<iSuperheroeModel[]>
    getByName(name: String): Promise<iSuperheroeModel[]>
}

export class SuperheroeRespositoryMongo implements iSuperheroeRespository{

    public async getById(id: Number): Promise<iSuperheroeModel[]>{
        const superheroe = Superheroe.find({ id })
        return superheroe
    }

    public async getByName(name: String): Promise<iSuperheroeModel[]>{
        const superheroe = Superheroe.find({ name })
        return superheroe
    }

}
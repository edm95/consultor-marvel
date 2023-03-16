interface iSuperheroe {
    getHeroeById(id: number): Promise<any>
    getHeroeByName(name: String): Promise<any>
}

class SuperheroeService implements iSuperheroe {

    async getHeroeById(id: number): Promise<any> {
        
    }

    async getHeroeByName(name: String): Promise<any> {
        
    }

}
import dotenv from "dotenv"
import express from "express"
import md5 from "md5"

import startDatabase from "./src/connection"

const PUBLIC_API_KEY = "065813b001507c8881791f771bece0b3"
const TIMESTAMP_API = "1000"

dotenv.config()

const app = express();

const startAplication = async (): Promise<void> => {
    await startDatabase();
    app.listen(process.env.PORT, () => {
      console.log('Conectado en el puerto', process.env.PORT);
    });
    return;
};

startAplication();
//------------------------------------------------------------------------------------------------------------------------------------------------------
/*
console.log(md5(TIMESTAMP_API + process.env.PRIVATE_API_KEY + PUBLIC_API_KEY))

fetch(`http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=${PUBLIC_API_KEY}&hash=${md5(TIMESTAMP_API + process.env.PRIVATE_API_KEY + PUBLIC_API_KEY)}`)
    .then( response => response.json() )
    .then( json => console.log(json.data.results)) 

*/
import mongoose from "mongoose"
import dotenv from "dotenv"
import Logs from "./helpers/logs";

dotenv.config();

const { MONGO_URI, MONGO_URI_TEST, NODE_ENV } = process.env

const connectionString = NODE_ENV === 'test' ? MONGO_URI_TEST : MONGO_URI

const startDatabase = async (): Promise<any> => {
    try {
        if (!connectionString){
          const error = new Error('Missing DB URI');
          Logs.error(error.message)
          throw error
        } else {
          const db_connection = await mongoose.connect(connectionString);
          
          Logs.info('Succesfully conected to database');
          return db_connection
        }
    } catch (error){
        Logs.error(error);
        Logs.error('Error connecting to database');
        throw error
      }
}

// if (!connectionString){
//   Logs.error("Missing DB URI")
// } else {
//   mongoose.connect(connectionString).then(() =>
//     Logs.info('Database conenected')
//   )
//   .catch((error) => {
//     Logs.error('Error connecting to the database')
//   })
// }


export default startDatabase;
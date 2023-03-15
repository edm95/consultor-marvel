import mongoose from "mongoose"
import dotenv from "dotenv"
import Logs from "./helpers/logs";

dotenv.config();
const MONGO_URI = `mongodb+srv://marvel_db_admin:${process.env.DB_PASSWORD}@cluster0.rfwt9fa.mongodb.net/marvel?retryWrites=true&w=majority`

const startDatabase = async (): Promise<void> => {
    try {
        if (!MONGO_URI){
          const error = new Error('Missing DB URI');
          Logs.error(error.message)
          throw error
        } else {
          await mongoose.connect(MONGO_URI);
          Logs.info('Succesfully conected to database');
        }
    } catch (error){
        Logs.error(error);
        Logs.error('Error connecting to database');
        throw error
      }
}

export default startDatabase;
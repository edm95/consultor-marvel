import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();
const MONGO_URI = `mongodb+srv://marvel_db_admin:${process.env.DB_PASSWORD}@cluster0.rfwt9fa.mongodb.net/marvel?retryWrites=true&w=majority`

const startDatabase = async (): Promise<void> => {
    try {
        if (!MONGO_URI){
          throw new Error('Missing DB URI');
        } else {
          await mongoose.connect(MONGO_URI);
          console.log('Succesfully conected to database');
        }
    } catch (error){
        console.log(error);
        console.log('Error conecting to database');
      }
}

export default startDatabase;
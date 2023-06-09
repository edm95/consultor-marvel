import dotenv from "dotenv"
import express, { NextFunction, request, Request, response, Response } from "express"
import md5 from "md5"
import cors from "cors"

import startDatabase from "./src/connection"
import Logs from "./src/helpers/logs"
import superheroeRouter from "./src/routes/superheroe"



dotenv.config()

export const app = express();

// const configureExpress = () =>{
//   app.use((req: Request, res: Response, next: NextFunction) => {
//     Logs.info(`Incomming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.ip}]`)

//     res.on('finish', () => {
//       Logs.info(`Incomming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.ip}] - Status: [${res.statusCode}]`)
//     })

//     next();
//   });

//   app.use(express.urlencoded({ extended: true }))
//   app.use(express.json())

//   app.use((req: Request, res: Response, next: NextFunction) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', '-Origin, X-Requested-With, Content-Type, Accept, Authorization')

//     if (req.method == 'OPTIONS') {
//       res.header('Access-Control-Allow-Methods', 'GET')
//       res.status(200).json({})
//       return
//     }

//     next();
//   });

//   /** Routes */
//   app.use('/superheroe', superheroeRouter)

//   /** CheckAPI */
//   app.get('/check', (req: Request, res: Response, next: NextFunction) => {
//     res.status(200).json({ message: 'Connected!' })
//     return
//   })


//   /** Error handler */
//   app.use((req: Request, res: Response) => {
//     const error = new Error('Error: not found')
//     Logs.error(error)

//     res.status(404).json({ message: error.message })
//   })
// }

// const startAplication = async (): Promise<void> => {
//     try {
//       await startDatabase();
//       await configureExpress();

//       server = app.listen(process.env.PORT, () => {
//         Logs.info(`Running on port: ${process.env.PORT}`);
//       });

//     } catch (error){
//       Logs.error(error)
//       Logs.error("Couldn't start aplication")
//     }
//     return;
// };

app.use((req: Request, res: Response, next: NextFunction) => {
  Logs.info(`Incomming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.ip}]`)

  res.on('finish', () => {
    Logs.info(`Incomming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.ip}] - Status: [${res.statusCode}]`)
  })

  next();
});

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '-Origin, X-Requested-With, Content-Type, Accept, Authorization')

  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET')
    res.status(200).json({})
    return
  }

  next();
});

/** Routes */
app.use('/superheroe', superheroeRouter)

/** CheckAPI */
app.get('/check', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'Connected!' })
  return
})


/** Error handler */
app.use((req: Request, res: Response) => {
  const error = new Error('Error: not found')
  Logs.error(error)

  res.status(404).json({ message: error.message })
})

export const server = app.listen(app.listen(process.env.PORT, () => {
  Logs.info(`Running on port: ${process.env.PORT}`);
}))

export const db_connection = startDatabase()
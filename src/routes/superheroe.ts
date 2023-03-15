import express from 'express'
import controller from '../controllers/superheroe'

const router = express.Router();

router.get('/id/:marvelId', controller.getById)
router.get('/name/:name', controller.getByName)

export default router
import {Router} from 'express'
import { addselection } from '../controller/selectionController'

const router = Router()

router.post('/add',addselection)

export default router
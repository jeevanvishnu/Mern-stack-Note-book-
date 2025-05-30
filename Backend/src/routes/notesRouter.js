import express from "express"
import { getAllNote  , createNote , updateNote , deleteNode , getNoteById} from "../controllers/note.controller.js"

const router = express.Router()

router.get('/', getAllNote)

router.get('/:id',getNoteById)

router.post('/',createNote)


router.put('/:id', updateNote)
 

router.delete('/:id', deleteNode)

export default router
import express from "express"
import { getAllNote  , createNote , updateNote , deleteNode} from "../controllers/note.controller.js"

const router = express.Router()

router.get('/', getAllNote)

router.post('/',createNote)


router.put('/:id', updateNote)
 

router.delete('/:id', deleteNode)

export default router
import { Router } from "express";
import {createUser, updateUser, getUsers, deleteUser, getUser} from "../controllers/user.controller"

const router = Router()

router.post('/users', createUser)
router.get('/users', getUsers)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)
router.get('/users/:id', getUser)

export default router
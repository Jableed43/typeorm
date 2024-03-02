import { Request, Response} from "express"
import { User } from "../entities/User"

export const createUser = async (req: Request, res: Response) =>{
    try {
        const {firstname, lastname} = req.body
    const user = new User()
    user.firstname = firstname
    user.lastname = lastname
    console.log(user)
    await user.save()
    return res.json(user)
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({message: error.message})
        }
    }
}

export const getUsers = async (req: Request, res: Response) =>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({message: error.message})
        }
    }
}

export const updateUser = async (req: Request, res: Response) =>{
    try {
        const id = Number(req.params.id)
        const userData = req.body
        const userToUpdate = await User.findOneBy({id: id})
        if(!userToUpdate){
            return res.status(400).json({message: "user doesn't exist"})
        }
        // userToUpdate.firstname = userData.firstName
        // userToUpdate.lastname = userData.lastName
        // userToUpdate.save()
        User.update({id: id}, userData)

        return res.sendStatus(204)
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({message: error.message})
        }
    }
}

export const deleteUser = async (req: Request, res: Response) =>{
    try {
        const id = Number(req.params.id)
        const userToDelete = await User.findOneBy({id: id})
        if(!userToDelete){
            return res.status(400).json({message: "user doesn't exist"})
        }
        const result = await User.delete({id: id})

        if(result.affected === 0){
            return res.status(404).json({message: "User not found"})
        }

        return res.sendStatus(204)
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({message: error.message})
        }
    }
}

export const getUser = async (req: Request, res: Response) =>{
    try {
        const id = Number(req.params.id)
        const userToFind = await User.findOneBy({id: id})
        if(!userToFind){
            return res.status(400).json({message: "user doesn't exist"})
        }
        return res.json(userToFind)
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({message: error.message})
        }
    }
}
import { Request, Response } from "express"
import { createNewselection } from "../service/selectionService"
import addSelection from "../types/selectionDTO"

export const addselection = async(req:Request<any, any, addSelection>,res:Response)=>{
    try {
        const newSelection = await createNewselection(req.body)
        res.status(200).json(newSelection)
    } catch (err) {
        res.status(400).json((err as Error).message)  
    }
}




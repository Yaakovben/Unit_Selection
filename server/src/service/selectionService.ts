import MilitaryForm from '../models/Model'
import addSelection from '../types/selectionDTO'
export const createNewselection = async (selection:addSelection) => {
    try {
        const newSelection = new MilitaryForm(selection)
        return await newSelection.save()
    } catch (err) {
        throw new Error((err as Error).message)
    }
}
import { createSlice } from "@reduxjs/toolkit";
import documents from "data/data.json"
import { uuid } from "utils/uuid";

let generateId = uuid()

const initialState = {
    documents,
    currentDocument: documents[0].name
}

const documentSlice = createSlice({
    name: "document",
    initialState,
    reducers: {
        deleteDocument: (state, action) => {
            const id = action.payload
            
            state.documents = state.documents.filter(document => document.id !== id)
        },

        saveDocument: (state, action) => {
            
        }
    }
    
})

export default documentSlice.reducer
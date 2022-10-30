import { createSlice } from "@reduxjs/toolkit";
import documents from "data/data.json";
import { uuid } from "utils/uuid";

let generateId = uuid();

type documentsType = typeof documents;

const saveToStorage = (name: string, value: string) =>
  localStorage.setItem(name, value);
const getDocuments = (): documentsType =>
  JSON.parse(localStorage.getItem("documents") || JSON.stringify(documents));

const getInitialState = (): typeof initialState => JSON.parse(localStorage.getItem("data") || JSON.stringify(initialState));

const initialState = {
  documents: documents,
  currentDocument: {
    name: documents[0].name,
    id: documents[0].id,
  },
};

const documentSlice = createSlice({
  name: "document",
  initialState: getInitialState(),

  
  reducers: {
    deleteDocument: (state) => {
      const { id, name } = state.currentDocument;
      let documentIndex = state.documents.findIndex((doc) => doc.id == id);

      if (documentIndex !== -1 && state.documents.length > 1) {
        state.documents.splice(documentIndex, 1);

        state.currentDocument = {
          name: state.documents[0].name,
          id: state.documents[0].id,
        };

        saveToStorage("documents", JSON.stringify(state.documents));
      }
    },

    changeDocumentName: (state, action) => {
      let { id, name } = state.currentDocument;

      let document = state.documents.find((doc) => doc.id === id);

      if (document) {
        document.name = action.payload;
        state.currentDocument.name = action.payload;
      }
    },

    saveDocument: (state) => {
      //   const { id } = state.currentDocument;
      //   let savedDocuments = getDocuments;

      //   let oldDocIndex = savedDocuments.findIndex((doc) => doc.id === id);
      //   let newDocIndex = state.documents.findIndex((doc) => doc.id === id);

      //   if (oldDocIndex !== -1) {
      //     savedDocuments.splice(oldDocIndex, 1, state.documents[newDocIndex]);
      //   } else {
      //     savedDocuments.push(state.documents[newDocIndex]);
      //   }

      //   saveToStorage("documents", JSON.stringify(savedDocuments));

      const initialState = {
        documents: state.documents,
        currentDocument: state.currentDocument,
      };

      saveToStorage("data", JSON.stringify(initialState));
    },
  },
});

export default documentSlice.reducer;
export const { deleteDocument, saveDocument, changeDocumentName } =
  documentSlice.actions;

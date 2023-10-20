import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        isSaving: false,
        messageSaved: '',
        publications: [],
        publication: null
    },
    reducers: {
        isSavingPublication: (state) => {
            state.isSaving = true;
        },
        addNewPublication: (state, action) => {
            state.publications.push(action.payload);
            state.isSaving = false;
        },
        setPublications: (state, action) => {
            state.publications = action.payload.content;
        },
        setPublicationById: ( state, action ) => {
            console.log(action.payload);
            console.log(state.publications);
            state.publication = state.publications.find(publication => publication.id === parseInt(action.payload));
            console.log(state.publications.find(publication => publication.id === parseInt(action.payload)));
        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        publicationUpdated: (state, action) => {
            state.isSaving = false;
            state.publications = state.publications.map(publication => {
                if (publication.id === action.payload.id) {
                    return action.payload;
                }

                return publication;
            });
            state.messageSaved = `${action.payload.title}, updated successfully`;
        }
    }
});

export const {
    addNewPublication,
    setPublications,
    setSaving,
    isSavingPublication,
    setPublicationById
} = blogSlice.actions;
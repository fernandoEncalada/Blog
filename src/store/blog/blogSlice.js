import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        isSaving: false,
        messageSaved: '',
        publications: [],
        categories: [],
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
        addNewCategory: (state, action) => {
            state.categories.push(action.payload);
            state.isSaving = false;
        },
        setPublications: (state, action) => {
            console.log(action.payload);
            state.publications = action.payload.content;
        },
        setPublicationsByCategory: (state, action) => {
            state.publications = action.payload;
        },
        setPublicationById: ( state, action ) => {
            state.publication = state.publications.find(publication => publication.id === parseInt(action.payload));
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
    addNewCategory,
    setPublications,
    setPublicationsByCategory,
    setSaving,
    isSavingPublication,
    setPublicationById
} = blogSlice.actions;
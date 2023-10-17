import axios from "axios";
import { addNewEmptyPublication, isSavingPublication, setPublications } from "./blogSlice"
import { getPublications } from "../../helpers/getPublications";
import blogApi from "../../api/blogApi";

export const startNewPublication = () => {
    return async( dispatch, getState ) => {

        dispatch( isSavingPublication() );
        const url = 'http://localhost:8082/api/publications/1?category_id=1';

        const newPublication = {
            title: '',
            description: '',
            content: '',
            comments: [],
            categoryId: 1,
            picture: "",
            user_id: 1
        }
        // TODO: CHANGE 1 FOR THE USER ID LOGGED
        const data = await blogApi.post('/publications/1', newPublication );
        console.log(data);
        dispatch( addNewEmptyPublication( newPublication ));
    }
}

export const startSavePublication = () => {
    return async( dispatch, getState ) =>{

        dispatch( setSaving() );

        const { publication } = getState().blog;

        const docRef =  doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await setDoc( docRef, noteToFireStore, { merge: true } );

        dispatch( noteUpdated( note ));
    }
}

export const startLoadingPublications = () => {
    return async( dispatch, getState ) => {
        const publications = await getPublications();
        dispatch( setPublications(publications) );
    }
}
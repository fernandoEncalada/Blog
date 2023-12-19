import { useDispatch, useSelector } from "react-redux"
import blogApi from "../api/blogApi";
import { addNewPublication, setPublicationById, setPublications } from "../store/blog/blogSlice";

export const useBlogStore = () => {

    const dispatch = useDispatch();
    const { publications, publication } = useSelector( state => state.blog );

    const startSavingPublication = async( publication ) => {
        try {
            const { data } = await blogApi.post('/publications/1', publication)
            dispatch( addNewPublication( data ))
        } catch (error) {
            console.log(error);
        }
    }

    const loadPublications = async() => {
        try {
            const { data } = await blogApi.get('/publications?page=0&size=100&sortBy=id&sortDir=desc');
            dispatch( setPublications( data ));
        } catch ( error ) {
            console.log(error);
        }
    }

    const getPublicationById = async(id) => {
        await loadPublications();
        dispatch(setPublicationById( id ))
    }

    return {
        startSavingPublication,
        loadPublications,
        getPublicationById,
        publications,
        publication
    }
} 


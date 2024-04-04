import { useDispatch, useSelector } from "react-redux"
import blogApi from "../api/blogApi";
import { addNewCategory, addNewPublication, setPublicationById, setPublications, setPublicationsByCategory } from "../store/blog/blogSlice";

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
    
    const startUpdatingPublication = async( publication ) => {
        try {
            const { data } = await blogApi.put(`/publications/${publication.id}`, publication)
            dispatch( addNewPublication( data ))
        } catch (error) {
            console.log(error);
        }
    }

    const startSavingCategory = async( category ) => {
        try {
            const { data } = await blogApi.post('/categories', category)
            dispatch( addNewCategory( data ))
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

    const loadPublicationsByCategoryId = async(id) => {
        try {
            const { data } = await blogApi.get(`/publications/category/${id}`);
            dispatch( setPublicationsByCategory( data ));
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
        startUpdatingPublication,
        startSavingCategory,
        loadPublications,
        getPublicationById,
        loadPublicationsByCategoryId,
        publications,
        publication
    }
} 


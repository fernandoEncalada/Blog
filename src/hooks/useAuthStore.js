import { useDispatch, useSelector } from "react-redux"
import blogApi from "../api/blogApi";
import { checkingCredentials, clearErrorMessage, login, logout, updateCredentials } from "../store/auth/authSlice";
import { jwtDecode } from "jwt-decode";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();


    const startLogin = async({ username, password }) => {
        
        dispatch(checkingCredentials());

        try {
            const { data } = await blogApi.post('/auth/login', { username, password });
            
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({ token: data.token, username}));

        } catch (e) {
            dispatch(logout('Bad credentials'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const startRegister = async({ name, lastName, email, username, password }) => {
        
        dispatch(checkingCredentials());

        try {
            const { data } = await blogApi.post('/auth/register', { name, lastName, email, username, password });
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({ token: data.token, username}));

        } catch (e) {
            dispatch(logout('Bad credentials'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if( !token ) return dispatch(logout('Token Expired'));

          // Decode the token to get its expiration time
        const decodedToken = jwtDecode(token);

        // Get the current time in seconds
        const currentTime = Math.floor(Date.now() / 1000);

        // Check if the token is expired
        if (decodedToken.exp < currentTime) {
            localStorage.clear();
            return dispatch(logout('Token Expired'));
        }

        dispatch(updateCredentials());

    }

    return {
        status,
        user, 
        errorMessage,
        startLogin,
        startRegister,
        checkAuthToken
    }
}
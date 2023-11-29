import blogApi from "../../api/blogApi";
import { checkingCredentials, login, logout } from "./authSlice";

export const startLoginWithUsernameAndPassword = ({ username, password}) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        // const { ok, errorMessage, displayName, token, photURL } = await login  loginWithEmailAndPassword({ email, password });
        const data  = await blogApi.post('/auth/login', { username, password });
        if (data.status !== 200) return dispatch( logout({}));
        console.log({ token: data.data.token, username});
        dispatch( login({ token: data.data.token, username}) )
    }

}
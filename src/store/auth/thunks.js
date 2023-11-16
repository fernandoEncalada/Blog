import blogApi from "../../api/blogApi";
import { checkingCredentials, login, logout } from "./authSlice";

export const startLoginWithUsernameAndPassword = ({ username, password}) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        // const { ok, errorMessage, displayName, token, photURL } = await login  loginWithEmailAndPassword({ email, password });
        console.log(username, password);
        const data  = await blogApi.post('/auth/login', { username, password });
        console.log({ token: data.data.token, username});
        if (!data.status !== 200) return dispatch( logout({}));
        dispatch( login({ token: data.data.token, username}) )
    }

}
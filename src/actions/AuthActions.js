import { LOGIN,LOCAL_LOGIN } from "../constants";

export const Login =  (data) => {
    try{
        return async dispatch => {
            dispatch({
                type:LOGIN,
                payload:data
            })
        }
    }catch(e){
        console.log(e)
    }
}

export const locallogin = data => {
    try{
        return async dispatch => {
            dispatch({
                type:LOCAL_LOGIN,
                payload:data
            })
        }
    }catch(e){
        console.log(e)
    }
}
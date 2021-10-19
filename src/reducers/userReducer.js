import { LOCAL_LOGIN, LOGIN } from '../constants';
const initialState = {
    user:null,
    is_logged_in:false
};
const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user:action.payload,
                is_logged_in:true,
            };
        case LOCAL_LOGIN:
            return{
                ...state,
                user:action.payload,
                is_logged_in:true,
            }    
        default:
            return state;
        }
    }
export default userReducer;
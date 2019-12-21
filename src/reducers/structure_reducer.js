import {
    CREATE_STRUCTURE,
    CREATE_STRUCTURE_SUCCESS,
    CREATE_STRUCTURE_FAILURE,
    EDIT_STRUCTURE,
    EDIT_STRUCTURE_SUCCESS,
    EDIT_STRUCTURE_FAILURE,
    DELETE_STRUCTURE,
    DELETE_STRUCTURE_SUCCESS,
    DELETE_STRUCTURE_FAILURE,
 } from '../actions/actionTypes';

 const INIT_STATE = {
    structure: null,
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case CREATE_STRUCTURE:
            return { ...state, loading: true };

        case CREATE_STRUCTURE_SUCCESS:
            return { ...state, loading: false, token: action.payload.user.token, loggedIn: true, user: action.payload };

        case CREATE_STRUCTURE_FAILURE:
            return { ...state, loading: false };

        case EDIT_STRUCTURE:
            return { ...state, user: null };

        case EDIT_STRUCTURE_SUCCESS:
            return { ...state, loading: true };

        case EDIT_STRUCTURE_FAILURE:
            return { ...state, loading: false, user: action.payload };

        case DELETE_STRUCTURE:
            return { ...state, loading: false };
         
        case DELETE_STRUCTURE_SUCCESS:
            return { ...state, loading: false };

        case DELETE_STRUCTURE_FAILURE:
            return { ...state, loading: false };            

        default: return { ...state };
    }
}

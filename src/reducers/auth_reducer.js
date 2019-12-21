import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    EXPIRED_TOKEN
} from '../actions/actionTypes';

/**
 * initial auth user
 */
const INIT_STATE = {
    user: null,
    token: "",
    loggedIn: false,
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case LOGIN_USER:
            return { ...state, loading: true, loggedIn: false};

        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, token: action.payload.user.token, loggedIn: true, user: action.payload };

        case LOGIN_USER_FAILURE:
            return { ...state, loading: false, loggedIn: false};

        case LOGOUT_USER:
            return { ...state, loggedIn: false, user: null };

        case SIGNUP_USER:
            return { ...state, loading: true, loggedIn: false };

        case SIGNUP_USER_SUCCESS:
            return { ...state, loading: false, loggedIn: true, user: action.payload };

        case SIGNUP_USER_FAILURE:
            return { ...state, loading: false, loggedIn: false };

        case EXPIRED_TOKEN:
            return { ...state, loggedIn: false, loading: false, user: action.payload };

        default: 
            return { ...state };
    }
}

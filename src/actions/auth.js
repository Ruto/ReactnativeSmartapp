import { TRY_AUTH } from './actionTypes';

export const tryAuth = (authData) => (dispatch) => {
  dispatch({ type: TRY_AUTH });
    return {
      type: TRY_AUTH,
      authData: authData
    };
};

/**
 * 
 * export const tryAuth = (authData) => (dispatch) => {
         return dispatch => {
        axios.post('http://localhost:5000/signin', {
            username: authData.username,
            password: authData.password
        })
        .then((response)=>{
          token = response.headers['Authorization']=
          // response.headers['Authorization'] = `Bearer ${token}`;
         // headers: { 'Authorization': 'Bearer ' + this.getToken() }
          AsyncStorage.setItem("token", "token");
            dispatch({
                type: AUTH_LOGIN,
                username: response.username
            })
     .then((user) => {
       // AsyncStorage.setItem("token", "token");
        dispatch({ type: LOGIN_USER_SUCCESS, payload: AsyncStorage.getItem('token') });
        history.push('App');
        this.props.navigation.navigate('App');
       // NotificationManager.success('User Login Successfully!');
     })
     .catch((error) => {
        dispatch({ type: LOGIN_USER_FAILURE });
        NotificationManager.error(error.message);
     });
}
*/


import {
   LOGIN_USER,
   LOGIN_USER_SUCCESS,
   LOGIN_USER_FAILURE,
   LOGOUT_USER,
   SIGNUP_USER,
   SIGNUP_USER_SUCCESS,
   SIGNUP_USER_FAILURE,
   EXPIRED_TOKEN
} from './actionTypes';
import axios from 'axios';
// import { AsyncStorage } from 'react-native';
import jwt from 'jwt-decode';


/**
 * Redux Action To Sigin User With Firebase
 */
export const onLoginUser = (authData) => (dispatch) => {
   dispatch({ type: LOGIN_USER });     
   axios.post('https://smartsystemsapi.herokuapp.com/v1/sessions', {        
         email: authData.email,
         password: authData.password
        //authData
   })
   .then((response) => {
         const token = response.data.user.token
       //  AsyncStorage.setItem('userLoggedin', 'true');
       //  AsyncStorage.setItem("token", token);
       //  AsyncStorage.setItem("UserData", jwt(token));
         dispatch({ type: LOGIN_USER_SUCCESS,
                    payload: response.data     
      });
   })
   .catch((error) => {
         dispatch({ type: LOGIN_USER_FAILURE });
        // NotificationManager.error(error.message);
      });
}

/**
 * Redux Action To Signout User From  Firebase
 */
export const logoutUser = () => (dispatch) => {
   api.auth().signOut()
      .then(() => {
         dispatch({ type: LOGOUT_USER });
        // AsyncStorage.removeItem('token');
         // NotificationManager.success('User Logout Successfully');
      })
      .catch((error) => {
         // NotificationManager.error(error.message);
      })
}

/**
 * Redux Action To Signup User In Firebase
 */
export const onSignupUser = (userData) => (dispatch) => {
   dispatch({ type: SIGNUP_USER }); 
   axios.post('https://smartsystemsapi.herokuapp.com/v1/users', {   
         username: userData.username,     
         email: userData.email,
         password: userData.password,
         password_confirmation: userData.password_confirmation
   })
      .then((success) => {
         //AsyncStorage.setItem("token", response.data.user.token);
         dispatch({ type: SIGNUP_USER_SUCCESS, payload: response.data.user });
        // NotificationManager.success('Account Created Successfully!');
      })
      .catch((error) => {
         dispatch({ type: SIGNUP_USER_FAILURE });
       //  NotificationManager.error(error.message);
      })
}

export const expiredToken = (user) => (dispatch) => {
   dispatch({ type: EXPIRED_TOKEN, payload: user }); 
}

//const request = {"auth": {"email": email, "password": password}}
         //console.log(request)
/**
 *  axios({
      method: 'post',
      url: '/https://smartsystemsapi.herokuapp.com/v1/sessions',
      data: {
         email: 'ruto.k.ke@gmail.com',
        password: '12345678'
      }
    })


    //  API URL = BASE_API_URL + API_URL and single JWT_TOKEN

const api = `your api here`
axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
            console.log(res.data);
        this.setState({
            items: res.data,  // set response data in items array
            isLoaded : true,
            redirectToReferrer: false
        })

    static axiosInstance =  axios.create({
        baseURL: "BASE_API_URL",
          timeout: 5000,
          headers: {
            'Authorization': "JWT_TOKEN",
            'Content-Type': 'application/json'
          }
        }); 

        // AsyncStorage.setItem("token", response.headers['Authorization']);
        // dispatch({ type: LOGIN_USER_SUCCESS, payload: AsyncStorage.getItem('token') });
        // history.push('HomeScreen');
        // NotificationManager.success('User Login Successfully!');

        * 
 */


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
 } from './actionTypes';
 import axios from 'axios';

 export const createStructure = (structureData) => (dispatch) => {
    dispatch({ type: CREATE_STRUCTURE }); 
    axios.post('https://smartsystemsapi.herokuapp.com/v1/structure', {   
          structureData
    })
       .then((success) => {
         // AsyncStorage.setItem("token", response.data.user.token);
          dispatch({ type: CREATE_STRUCTURE_SUCCESS, payload: response.data.structure });
       })
       .catch((error) => {
          dispatch({ type: CREATE_STRUCTURE_FAILURE });
       })
 }
 

 export const editStructure = (structureData) => (dispatch) => {
    dispatch({ type: EDIT_STRUCTURE }); 
    axios.put('https://smartsystemsapi.herokuapp.com/v1/structure', {   
          structureData
    })
       .then((success) => {
          dispatch({ type: EDIT_STRUCTURE_SUCCESS, payload: response.data.structure });
       })
       .catch((error) => {
          dispatch({ type: EDIT_STRUCTURE_FAILURE });
       })
 }

 export const deleteStructure = (structureData) => (dispatch) => {
    dispatch({ type: DELETE_STRUCTURE }); 
    axios.post('https://smartsystemsapi.herokuapp.com/v1/structure', {   
          structureData
    })
       .then((success) => {
          dispatch({ type: DELETE_STRUCTURE_SUCCESS, payload: response.data.structure });
       })
       .catch((error) => {
          dispatch({ type: DELETE_STRUCTURE_FAILURE });
       })
 }
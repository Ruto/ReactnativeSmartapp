import axios from 'axios';

export default
   axios.create({
      baseURL: 'https://smartsystemsapi.herokuapp.com/v1/',
      timeout: 2000
   });


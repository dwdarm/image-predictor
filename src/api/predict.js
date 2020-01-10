import axios from 'axios';
import { BASE_URL, API_KEY } from './config';

const GENERAL_MODEL_URI = 'aaa03c23b3724a16a56b629203edc62c/versions/aa7f35c01e0642fda5cf400f543e7c40';

const predict = {

  general(url) {
    return axios.post(`${BASE_URL}/models/${GENERAL_MODEL_URI}/outputs`, 
    {
      inputs: [{
        data: {
          image: {
            url: url
          }
        }
      }]
    }, 
    {
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Key ${API_KEY}`
      }
    });
  }

}

export default predict;
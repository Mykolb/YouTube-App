import axios from 'axios';


const KEY = 'AIzaSyBwtQMSsi9tDnuT4IzFUeVZFhSWqLuwYRs';

//when user accesses your app they are sent the key
//pre configured axios instance 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults: 5, 
        key: KEY
    },
   
})
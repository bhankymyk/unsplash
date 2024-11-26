import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${process.env.VUE_APP_UNSPLASH_ACCESS_KEY}`,
},
});
console.log('Unsplash Access Key:', process.env.VUE_APP_UNSPLASH_ACCESS_KEY);
export default unsplash;

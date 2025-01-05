import axios from 'axios';
const URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "d5163fcdc1b658bc142da1a8250b5687";

const endpoints = {
    originals: "550",
    trending: "551",
    now_playing: "552",
    popular: "553",
    top_rated: "554",
    upcoming: "555",
};
const arr=[]

export const fetchData = async (param) => {
    try {
        

       
            const response = await axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`);
         //   console.log('API Response:', response.data); // Debugging response
            return response.data
        

        
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Optionally rethrow the error
    }
};



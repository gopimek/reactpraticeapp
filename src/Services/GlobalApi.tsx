
const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "2ec0d66f5bdf1dd12eefa0723f1479cf";  
const Image_base_url = "https://image.tmdb.org/t/p/original/";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';
const getRequest = async (url: any, /* header: any */) => {
    try {
        const response = await fetch(url, {
            method: "GET"/* ,
            headers: header */
        })
        const jsonResponse = await response.json()
        return jsonResponse;
    } 
    catch (error:any) {
        console.error("Get Method error", error)
        return JSON.stringify({ error: error.message });
    }
}
const postRequest = async (url:any, body:any, header:any) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: header
        })
        const jsonResponse = await response.json()
        return JSON.stringify(jsonResponse)
    }
    catch (error:any) {
        console.warn("Post method error", error)
        return JSON.stringify({ error: error.message });
    }
}
const deleteRequest = async (url:any, body:any, header:any) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            body: JSON.stringify(body),
            headers: header,
        })
        const jsonResponse = await response.json()
        return JSON.stringify(jsonResponse)
    }
    catch (error:any) {
        console.error("Get Method error", error)
        return JSON.stringify({ error: error.message });
    }
}
const getTrendingVideoas = getRequest(`${movieBaseUrl}/trending/all/day?api_key=${apiKey}`);
const getMovieByGenreId=(id:any)=> getRequest(`${movieByGenreBaseURL}&/with_genres=${id}`);

export default {
  getTrendingVideoas,Image_base_url,getMovieByGenreId
};
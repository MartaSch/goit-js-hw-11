import axios from 'axios';
export const fetchPhotos = async (text,page) => {
    const url = 'https://pixabay.com/api/';
    const searchParams = new URLSearchParams({
        key: "34844586-16ef58ffda20b308d0a01d63e",
        q: text,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "TRUE",
        page: page,
        per_page: 40, 
    })
     try {  
        const response = await axios.get(`${url}?${searchParams}`);
       return response;
    } catch (error) {
        console.log(error.message);
    }
}

import axios from 'axios';

const API_URL = "/api/images";

export const addImage = async (url, label) => {


    //if null ...
    //change proxy or url


    const reqBody = {
        url: url,
        label: label
    }

    const response = await axios.post(API_URL, reqBody);
    console.log(response);

    return response

}

export const getImages = async () => {
    //change proxy
    const response = await axios.get(API_URL);
    //console.log(response);

    return response;
}

export const deleteImage = async (id) => {
    const response = axios.delete(API_URL, { data: { imageID: id }});
    return response;
}
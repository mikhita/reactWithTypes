import axios from 'axios';
import { DiaryEntry, NewDiary } from "./types";

const baseUrl = 'http://localhost:3000/api/diaries'

export const getAllDiaries = () => {
  return axios
    .get<DiaryEntry[]>(baseUrl)
    .then(response => response.data)
}

export const createDiary = (object: NewDiary) => {
  console.log(object);

  return axios
    .post<DiaryEntry>(baseUrl, object)
    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        // The request was made, but the server responded with an error response.
        // You can access response data and status here.
        console.error("Server responded with an error:", error.response.status, error.response.data);
      } else if (error.request) {
        // The request was made, but there was no response received.
        // You can handle this as a network error.
        console.error("Network error:", error.request);
      } else {
        // Something else happened while setting up the request.
        // You can handle this as a request setup error.
        console.error("Request setup error:", error.message);
      }

      // You can re-throw the error or return a custom error response as needed.
      throw error;
    });
};


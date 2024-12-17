import axios from "axios"


import { ANIME_BASE_URL } from "../utils/constant"





export const animeListServices = {
    getAnimeList: async (page: number, query?: string) => {
        let response;
        if (query) {
            response = await axios.get(`${ANIME_BASE_URL}/anime?page=${page}&q=${query}`);
        } else {
            response = await axios.get(`${ANIME_BASE_URL}/anime?page=${page}`);
        }
        return response
    }
}




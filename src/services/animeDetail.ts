import axios from "axios"


import { ANIME_BASE_URL } from "../utils/constant"



interface IGetAnimeDetail {
    status: number | undefined

    Daum: []
    mal_id: number

}

export const animeDetailServices = {
    getAnimeDetail: async (mal_id: string): Promise<IGetAnimeDetail> => {

        const response = await axios.get(`${ANIME_BASE_URL}/anime/${mal_id}`)

        return response.data
    }
}





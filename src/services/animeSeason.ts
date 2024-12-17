import axios from "axios"


import { ANIME_BASE_URL } from "../utils/constant"
import { animeSeasonresponse } from "../interface/animeSeason"


interface IGetAnimeSeason {
    status: number | undefined
    data: animeSeasonresponse


}

export const animeSeasonServices = {
    getAnimeSeason: async (year: any, season: string): Promise<IGetAnimeSeason> => {

        const response = await axios.get(`${ANIME_BASE_URL}/seasons/${year}/${season}`)

        return response
    }
}





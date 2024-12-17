export interface animeListresponse {
    aired
    :
    null
    airing
    :
    true
    approved
    :
    true
    background
    :
    string
    broadcast
    :
    string
    demographics
    :
    []
    duration
    :
    string
    episodes
    :
    number
    explicit_genres
    :
    []
    favorites
    :
    number
    genres
    :
    []

    licensors
    :
    []

    members
    :
    number
    popularity
    :
    number
    producers
    :
    []
    rank
    :
    number
    rating
    :
    string

    scored_by
    :
    number
    season
    :
    string
    source
    :
    string
    status
    :
    string
    studios
    :
    null
    synopsis
    :
    string


    themes: string

    title_english: string

    name: string
    mal_id: string;
    title: string;
    score?: number;
    images: AnimeImage;

}



interface AnimeImage {
    jpg: {
        image_url: string;
    };
}


interface AnimeImage {
    jpg: {
        image_url: string;
    };
}


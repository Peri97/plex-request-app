export interface Genres {
    name: string;
}

export interface Movie {
    original_title: string;
    release_date: string;
    media_type: string;
    poster_path: string;
    popularity: string;
    name: string;
    vote_average: string;
    genres: Genres[];

}

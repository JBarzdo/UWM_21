export interface IMovieSearchResponseMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface IMovieResposeProps {
  Error?: string;
  Response: string;
}

export interface IMovieSearchResponse extends IMovieResposeProps {
  totalResults: string;
  Search: IMovieSearchResponseMovie[];
}

export interface IMovieBasicProps {
  poster: string;
  title: string;
  type: string;
  year: string;
  id: string;
}

export interface IMoviesProps {
  movies: IMovieBasicProps[];
  totalResults: number;
}


export interface IMovieResponseRating {
  Source: string;
  Value: string;
}

export interface IMovieResponse extends IMovieResposeProps {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: IMovieResponseRating[];
  Released: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

export interface IMovieProps {
  production: string;
  plot: string;
  title: string;
  ageRating: string;
  releaseDate: string;
  writer: string;
  director: string;
  actors: string;
  awards: string;
  rating: string;
  votes: string;
  poster: string;
}

export interface SearchProps {
  search: string;
  page: number;
}

export interface StateStructure {
  videos: IMovieSearchResponseMovie[];
  resultLength: number,
  totalResults: number,
  page: number,
  message: string,
  isLoading: boolean,
}

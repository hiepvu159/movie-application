import axios from "axios";
const url = "http://192.168.69.102:8000/api";

export const getMovies = async (setMovies) => {
  await axios
    .get(`${url}/movies`)
    .then((res) => {
      setMovies(res.data);
    })
    .catch((err) => console.log(err));
};

export const getMovieById = async (id, setMovie) => {
  await axios
    .get(`${url}/movies/find/${id}`)
    .then((res) => setMovie(res.data))
    .catch((err) => console.log(err));
};

export const getNewMovie = async (setMovies) => {
  await axios
    .get(`${url}/movies/new`)
    .then((res) => {
      setMovies(res.data);
    })
    .catch((err) => console.log(err));
};

export const getMoviesSeries = async (setMovies) => {
  await axios
    .get(`${url}/movies/series`)
    .then((res) => {
      setMovies(res.data);
    })
    .catch((err) => console.log(err));
};
export const getMoviesSingle = async (setMovies) => {
  await axios
    .get(`${url}/movies/single`)
    .then((res) => {
      setMovies(res.data);
    })
    .catch((err) => console.log(err));
};

export const searchMovie = async (params, setMovie) => {
  await axios
    .get(`${url}/movies/search/name=${params}`)
    .then((res) => {
      setMovie(res.data);
    })
    .catch((err) => console.log(err));
};

export const filterMovie = async (params, setMovie) => {
  await axios
    .get(`${url}/movies/filter/name=${params}`)
    .then((res) => {
      setMovie(res.data);
    })
    .catch((err) => console.log(err));
};

// export const getInfo = async (src, setMovie, setLink) => {
//   await axios
//     .get(`${src}`)
//     .then((res) => {
//       setMovie(res.data.movie);
//       setLink(res.data);
//     })
//     .catch((err) => console.log(err));
// };

export const getMovieByCategory = async (setMovies, category) => {
  await axios
    .get(`${url}/movies/filter/name=${category}`)
    .then((res) => {
      setMovies(res.data);
    })
    .catch((err) => console.log(err));
};

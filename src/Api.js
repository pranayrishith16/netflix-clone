const apiKey = "00f0c5025c67922c29d0291af033a440"

// trending, netflixoriginals, toprated, action, comedy, horror, romance, documentaries

const requests = {
    fetchTrending:`/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${apiKey}&with_genres=99`,
}

export default requests;
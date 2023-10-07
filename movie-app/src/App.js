import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// API Key: ddda1042
// https://www.omdbapi.com/?i=tt3896198&apikey=ddda1042
// http://www.omdbapi.com/?apikey=ddda1042

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=ddda1042';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json(); // Search [], totalResults int, Response bool

        setMovies(data.Search);
    };

    /*useEffect(() => {
        searchMovies('Spider-man');
    }, []);*/
    
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}

            
        </div>
    );
}

export default App;

/*const movie1 = {
        "Title": "Interstellar",
        "Year": "2014",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
}*/
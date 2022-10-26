import React, { useState, useEffect } from "react"
import { MovieCard } from "./MovieCard"
import { getAllChristmasList, getAllWatchedChristmasList, getAllUnwatchedChristmasList } from "../../modules/MovieManager"

// all Christmas
export const MovieListChristmas = () => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        getAllChristmasList().then((moviesFromAPI) => {
            setMovies(moviesFromAPI)
        })
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div className="viewBody">
            <div className="card__container">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        posterAltTextString={movie.Title + " poster"}
                    />
                ))}
            </div>
        </div>
    )
}

// Christmas watched
export const MovieListChristmasWatched = () => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        getAllWatchedChristmasList().then((moviesFromAPI) => {
            setMovies(moviesFromAPI)
        })
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div className="viewBody">
            <div className="card__container">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        posterAltTextString={movie.Title + " poster"}
                    />
                ))}
            </div>
        </div>
    )
}

// Christmas unwatched
export const MovieListChristmasUnwatched = () => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        getAllUnwatchedChristmasList().then((moviesFromAPI) => {
            setMovies(moviesFromAPI)
        })
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div className="viewBody">
            <div className="card__container">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        posterAltTextString={movie.Title + " poster"}
                    />
                ))}
            </div>
        </div>
    )
}
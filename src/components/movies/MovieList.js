import React, { useState, useEffect } from "react"
import { MovieCard } from "./MovieCard"
import { getAllMovies } from "../../modules/MovieManager"

export const MovieList = () => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        getAllMovies().then((moviesFromAPI) => {
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
                        posterAltTextString={movie.title + " poster"}
                    />
                ))}
            </div>
        </div>
    )
}

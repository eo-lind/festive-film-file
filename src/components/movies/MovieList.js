import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { MovieCard } from "./MovieCard"
import { getAllMovies, getAllWatchedMovies, getAllUnwatchedMovies } from "../../modules/MovieManager"

// All movies
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
            <section className="movies__listFilters">
                <div className="movies__listFilterBtnAndLabelContainer">
                    <Link to="/movies-watched">
                        <button className="movies__listFilterBtn" />
                    </Link>
                    <label
                        className="movies__listFilterLabels"
                        htmlFor="watched"
                    >
                        Watched
                    </label>
                </div>
                <div className="movies__listFilterBtnAndLabelContainer">
                    <Link to="/movies-unwatched">
                        <button className="movies__listFilterBtn" />
                    </Link>
                    <label
                        className="movies__listFilterLabels"
                        htmlFor="unwatched"
                    >
                        Unwatched
                    </label>
                </div>
                <div className="movies__listFilterBtnAndLabelContainer">
                    <Link to="/movies">
                        <button className="movies__listFilterBtn" />
                    </Link>
                    <label className="movies__listFilterLabels" htmlFor="all">
                        All
                    </label>
                </div>
            </section>
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

// All watched movies
export const MovieListWatched = () => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        getAllWatchedMovies().then((moviesFromAPI) => {
            setMovies(moviesFromAPI)
        })
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div className="viewBody">
            <section className="movies__listFilters">
                <div className="movies__listFilterBtnAndLabelContainer">
                    <Link to="/movies-watched">
                        <button className="movies__listFilterBtn" />
                    </Link>
                    <label
                        className="movies__listFilterLabels"
                        htmlFor="watched"
                    >
                        Watched
                    </label>
                </div>
                <div className="movies__listFilterBtnAndLabelContainer">
                    <Link to="/movies-unwatched">
                        <button className="movies__listFilterBtn" />
                    </Link>
                    <label
                        className="movies__listFilterLabels"
                        htmlFor="unwatched"
                    >
                        Unwatched
                    </label>
                </div>
                <div className="movies__listFilterBtnAndLabelContainer">
                    <Link to="/movies">
                        <button className="movies__listFilterBtn" />
                    </Link>
                    <label className="movies__listFilterLabels" htmlFor="all">
                        All
                    </label>
                </div>
            </section>
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

// All unwatched movies
export const MovieListUnwatched = () => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        getAllUnwatchedMovies().then((moviesFromAPI) => {
            setMovies(moviesFromAPI)
        })
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div className="viewBody">
            <section className="movies__listFilters">
                <div className="movies__listFilterBtnAndLabelContainer">
                    <Link to="/movies-watched">
                        <button className="movies__listFilterBtn" />
                    </Link>
                    <label
                        className="movies__listFilterLabels"
                        htmlFor="watched"
                    >
                        Watched
                    </label>
                </div>
                <div className="movies__listFilterBtnAndLabelContainer">
                    <Link to="/movies-unwatched">
                        <button className="movies__listFilterBtn" />
                    </Link>
                    <label
                        className="movies__listFilterLabels"
                        htmlFor="unwatched"
                    >
                        Unwatched
                    </label>
                </div>
                <div className="movies__listFilterBtnAndLabelContainer">
                    <Link to="/movies">
                        <button className="movies__listFilterBtn" />
                    </Link>
                    <label className="movies__listFilterLabels" htmlFor="all">
                        All
                    </label>
                </div>
            </section>
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
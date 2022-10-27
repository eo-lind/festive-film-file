import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
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
            <section className="movies__listFilters">
                <div className="movies__listFilterBtnAndLabelContainer">
                    <Link to="/christmas-movies-watched">
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
                    <Link to="/christmas-movies-unwatched">
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
                    <Link to="/christmas-movies">
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
            <section className="movies__listFilters">
                <div className="movies__listFilterBtnAndLabelContainer">
                    <Link to="/christmas-movies-watched">
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
                    <Link to="/christmas-movies-unwatched">
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
                    <Link to="/christmas-movies">
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
            <section className="movies__listFilters">
                <div className="movies__listFilterBtnAndLabelContainer">
                    <Link to="/christmas-movies-watched">
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
                    <Link to="/christmas-movies-unwatched">
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
                    <Link to="/christmas-movies">
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
                        posterAltTextString={movie.Title + " poster"}
                    />
                ))}
            </div>
        </div>
    )
}
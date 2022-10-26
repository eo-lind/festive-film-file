import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { MovieCard } from "./MovieCard"
import { getAllHalloweenList, getAllWatchedHalloweenList, getAllUnwatchedHalloweenList } from "../../modules/MovieManager"


// all Halloween
export const MovieListHalloween = () => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        getAllHalloweenList().then((moviesFromAPI) => {
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
                    <Link to="/halloween-movies-watched">
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
                    <Link to="/halloween-movies-unwatched">
                        <button className="movies__listFilterBtn" />
                    </Link>
                    <label className="movies__listFilterLabels" htmlFor="all">
                        Unwatched
                    </label>
                </div>
                <div className="movies__listFilterBtnAndLabelContainer">
                    <Link to="/halloween-movies">
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

// Halloween watched
export const MovieListHalloweenWatched = () => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        getAllWatchedHalloweenList().then((moviesFromAPI) => {
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
                  <Link to="/halloween-movies-watched">
                      <button className="movies__listFilterBtn" />
                  </Link>
                  <label className="movies__listFilterLabels" htmlFor="watched">Watched</label>
                </div>
                <div className="movies__listFilterBtnAndLabelContainer">
                  <Link to="/halloween-movies-unwatched">
                      <button className="movies__listFilterBtn" />
                  </Link>
                  <label className="movies__listFilterLabels" htmlFor="unwatched">Unwatched</label>
                </div>
                <div className="movies__listFilterBtnAndLabelContainer">
                  <Link to="/halloween-movies">
                      <button className="movies__listFilterBtn" />
                  </Link>
                  <label className="movies__listFilterLabels" htmlFor="all">All</label>
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

// Halloween unwatched
export const MovieListHalloweenUnwatched = () => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        getAllUnwatchedHalloweenList().then((moviesFromAPI) => {
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
                  <Link to="/halloween-movies-watched">
                      <button className="movies__listFilterBtn" />
                  </Link>
                  <label className="movies__listFilterLabels" htmlFor="watched">Watched</label>
                </div>
                <div className="movies__listFilterBtnAndLabelContainer">
                  <Link to="/halloween-movies-unwatched">
                      <button className="movies__listFilterBtn" />
                  </Link>
                  <label className="movies__listFilterLabels" htmlFor="unwatched">Unwatched</label>
                </div>
                <div className="movies__listFilterBtnAndLabelContainer">
                  <Link to="/halloween-movies">
                      <button className="movies__listFilterBtn" />
                  </Link>
                  <label className="movies__listFilterLabels" htmlFor="all">All</label>
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
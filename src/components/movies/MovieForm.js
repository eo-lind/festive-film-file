import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { addMovie, getExternalMovieByTitle } from "../../modules/MovieManager"
import { getAverageRating } from "../helpers/Helpers"
import "../forms.css"


export const MovieForm = () => {
    const [externalMovie, setExternalMovie] = useState({
        Title: "",
    })
    const [searchTerm, setSearchTerm] = useState()
    const navigate = useNavigate()

    const handleControlledInputChange = (event) => {
        const newSearchTerm = { ...searchTerm }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newSearchTerm[event.target.id] = selectedVal
        setSearchTerm(newSearchTerm)
    }

    const handleClickSaveMovie = (event) => {
        event.preventDefault()

        addMovie(externalMovie).then(() => {
            navigate("/movies-unwatched")
        })

        // TODO: navigate to an edit form that allows users to add user input to new movie object (same idea as movie edit form)
    }

    const handleClickSearch = (event) => {
        event.preventDefault()

        getExternalMovieByTitle(searchTerm.title).then(
            (movieFromExternalAPI) => {
                const updatedExternalMovie = {
                    Title: movieFromExternalAPI.Title,
                    Year: movieFromExternalAPI.Year,
                    Rated: movieFromExternalAPI.Rated,
                    Released: movieFromExternalAPI.Released,
                    Runtime: movieFromExternalAPI.Runtime,
                    Genre: movieFromExternalAPI.Genre,
                    Director: movieFromExternalAPI.Director,
                    Writer: movieFromExternalAPI.Writer,
                    Actors: movieFromExternalAPI.Actors,
                    Plot: movieFromExternalAPI.Plot,
                    Language: movieFromExternalAPI.Language,
                    Country: movieFromExternalAPI.Country,
                    Awards: movieFromExternalAPI.Awards,
                    Poster: movieFromExternalAPI.Poster,
                    Ratings: movieFromExternalAPI.Ratings,
                    Metascore: movieFromExternalAPI.Metascore,
                    imdbRating: movieFromExternalAPI.imdbRating,
                    imdbVotes: movieFromExternalAPI.imdbVotes,
                    imdbID: movieFromExternalAPI.imdbID,
                    Type: movieFromExternalAPI.Type,
                    DVD: movieFromExternalAPI.DVD,
                    BoxOffice: movieFromExternalAPI.BoxOffice,
                    Production: movieFromExternalAPI.Production,
                    Website: movieFromExternalAPI.Website,
                    ListCategory: "",
                    Availability: "",
                    Watched: "no",
                    UserReview: "",
                    UserScore: "",
                }

                setExternalMovie(updatedExternalMovie)
            }
        )
    }
   
    const posterAltTextString = `${externalMovie.Title} poster`
    const averageRating = getAverageRating(externalMovie)

    return (
        <div className="form__formAndPreviewContainer">
            <div className="form__movieFormContainer">
                <h2 className="form__titleHeader">New Movie</h2>
                <input
                    type="text"
                    id="title"
                    onChange={handleControlledInputChange}
                    required
                    autoFocus
                    className="form__control"
                    placeholder="Movie title"
                />
                <button
                    type="button"
                    className="btn__general"
                    id="form__rightBtn"
                    onClick={handleClickSearch}
                >
                    search
                </button>
                <button
                    type="button"
                    className="btn__general"
                    id="form__rightButtonEdit"
                    onClick={handleClickSaveMovie}
                >
                    Add This Movie
                </button>
                <div className="form__btnContainer">
                    <Link id="form__leftBtnWrapper" to="/movies">
                        <button
                            type="button"
                            className="btn__general"
                            id="form__leftBtn"
                        >
                            Cancel
                        </button>
                    </Link>
                </div>
            </div>
            <div className="form__previewContainer">
                <div className="card" id="card__preview">
                    <h2 className="form__titleHeader">Preview</h2>
                    {/* -------------------- basic movie details below -------------------- */}
                    {externalMovie.poster === "" ? (
                        <></>
                    ) : (
                        <img
                            src={externalMovie.Poster}
                            alt={posterAltTextString}
                            className="movie__img"
                        />
                    )}

                    <section className="movie__titleAndTopDetails">
                        <h3 className="movie__title">
                            {externalMovie.Website === "N/A" || externalMovie.Website === "" ? (
                                externalMovie.Title
                            ) : (
                                <a href={externalMovie.Website} target="_blank">
                                    {externalMovie.Title}
                                </a>
                            )}
                        </h3>
                        <p
                            className="movie__yearRatingAndRuntime"
                            id="movie__YearAndRating"
                        >
                            {externalMovie.Year}{" "}
                            {externalMovie.Rated === "" ? "" : `(${externalMovie.Rated})`}
                        </p>
                        <p className="movie__yearRatingAndRuntime">
                            {externalMovie.Runtime}
                        </p>
                    </section>

                    <div className="movie__plot">{externalMovie.Plot}</div>
                    <div className="movie__genre">{externalMovie.Genre}</div>
                    {/* -------------------- basic movie details above -------------------- */}
                   
                    {/* -------------------- collapsed details below -------------------- */}
                    <details>
                        <summary className="movie__collapsibleDetailsSummary">
                            More film details
                        </summary>
                        <div className="movie__collapsibleDetails">
                            {externalMovie.Actors !== "" ? (
                                <>
                                    <span className="descriptor">
                                        Starring:
                                    </span>{" "}
                                    {externalMovie.Actors}
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="movie__collapsibleDetails">
                            {externalMovie.Director !== "" ? (
                                <>
                                    <span className="descriptor">
                                        Directed By:
                                    </span>{" "}
                                    {externalMovie.Director}
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="movie__collapsibleDetails">
                            {externalMovie.Writer !== "" ? (
                                <>
                                    <span className="descriptor">
                                        Written By:
                                    </span>{" "}
                                    {externalMovie.Writer}
                                </>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div className="movie__collapsibleDetails">
                            {averageRating === "" ||
                            averageRating === NaN ||
                            averageRating === undefined ? (
                                <></>
                            ) : (
                                <>
                                    <span className="descriptor">
                                        Average Rating:
                                    </span>{" "}
                                    {averageRating}%
                                </>
                            )}
                        </div>
                    </details>
                    {/* -------------------- collapsed details above -------------------- */}
                </div>
            </div>
        </div>
    )
}

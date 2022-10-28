import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
    addMovie,
    getExternalMovieByTitle,
    getExternalMovieByTitleAndYear,
} from "../../modules/MovieManager"
import { getAverageRating } from "../helpers/Helpers"
import "../forms.css"


export const MovieForm = () => {
    const [externalMovie, setExternalMovie] = useState({
        Title: "",
        Year: "",
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

        if (searchTerm.title !== "" && searchTerm.year === "") {
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
        } else if (searchTerm.title !== "" && searchTerm.year !== "") {
            getExternalMovieByTitleAndYear(searchTerm.title, searchTerm.year).then(
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
        
    }

    const showPreview = () => {
        if (externalMovie.Title !== "") {
            return (
                <>
                    {externalMovie.Poster === "" ? (
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
                            {externalMovie.Website === "N/A" ||
                            externalMovie.Website === "" ? (
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
                            {externalMovie.Rated === ""
                                ? ""
                                : `(${externalMovie.Rated})`}
                        </p>
                        <p className="movie__yearRatingAndRuntime">
                            {externalMovie.Runtime}
                        </p>
                    </section>

                    <div className="movie__plot">{externalMovie.Plot}</div>
                    <div className="movie__genre">{externalMovie.Genre}</div>
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
                </>
            )
                                        
        } else {
            return(<></>)
            
        }
    }

   
    const posterAltTextString = `${externalMovie.Title} poster`
    const averageRating = getAverageRating(externalMovie)

    return (
        <div className="form__formAndPreviewContainer">
            <div className="form__movieFormContainer">
                <h2 className="form__titleHeader">New Movie</h2>

                <fieldset className="form__searchContainer">
                    <legend>Search For A Movie</legend>
                    <div className="form__searchInputContainer">
                    <input
                        type="text"
                        id="title"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form__leftInput"
                        placeholder="Movie title"
                    />
                    <input
                        type="text"
                        id="year"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form__rightInput"
                        placeholder="Year (optional)"
                    />
                    </div>
                    <button
                        type="button"
                        className="btn__general"
                        id="form__searchBtn"
                        onClick={handleClickSearch}
                    >
                        search
                    </button>
                </fieldset>

                <section className="form__finalActionBtnContainer">
                    <button
                        type="button"
                        className="btn__general"
                        id="form__AddMovieBtn"
                        onClick={handleClickSaveMovie}
                    >
                        Add This Movie
                    </button>
                    <Link id="form__CancelAddMovieBtnWrapper" to="/movies">
                        <button
                            type="button"
                            className="btn__general"
                            id="form__CancelAddMovieBtn"
                        >
                            Cancel
                        </button>
                    </Link>
                </section>
            </div>
            {/* -------------------- PREVIEW BELOW -------------------- */}
            <div className="form__previewContainer">
                <div className="card" id="card__preview">
                    <h2 className="form__titleHeader">Preview</h2>
                    {showPreview()}
                </div>
            </div>
        </div>
    )
}

import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
    addMovie,
    getExternalMovieByTitle,
    getExternalMovieByTitleAndYear,
} from "../../modules/MovieManager"
import { getAllCategories } from "../../modules/CategoryManager"
import { getAllAvailability } from "../../modules/AvailabilityManager"
import { getAverageRating, correctAvailabilityString, correctCategoryString } from "../helpers/Helpers"
import "../forms.css"


export const MovieForm = () => {
    const [externalMovie, setExternalMovie] = useState({
        Title: "",
        Year: "",
        Watched: "no"
    })
    const [searchTerm, setSearchTerm] = useState()
    const [categories, setCategories] = useState([])
    const [watchAvailability, setWatchAvailability] = useState([])
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

    const handleSelectMultipleChange = (event) => {
        const stateToChange = { ...externalMovie }

        stateToChange[event.target.id] += event.target.value + ", "

        setExternalMovie(stateToChange)
    }

    const handleUserAdditions = (event) => {
        const userInput = { ...externalMovie }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        userInput[event.target.id] = selectedVal
        setExternalMovie(userInput)
    }

    const handleClickSaveMovie = (event) => {
        event.preventDefault()
        // TODO: make sure user selects a watched status
        addMovie(externalMovie).then(() => {
            navigate("/movies")
        })
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
                        Watched: "",
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
                        Watched: "",
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

    const showUserInputPreview = () => {
        if (
            externalMovie.ListCategory !== "" ||
            externalMovie.Availability !== "" ||
            externalMovie.UserReview !== "" ||
            externalMovie.UserScore !== ""
        ) {
            // return  the expanded info like on details view
            return (
                <>
                    {externalMovie.ListCategory === "" ? (
                        <></>
                    ) : (
                        <>
                            <div className="movie__collapsibleDetails">
                                <span className="descriptor">Lists:</span>{" "}
                                {/* {correctCategoryString(externalMovie)} */}
                            </div>
                        </>
                    )}

                    {externalMovie.Watched === "" ? (
                        <></>
                    ) : (
                        <>
                            <div className="movie__collapsibleDetails">
                                <span className="descriptor">Watched?</span>{" "}
                                {externalMovie.Watched}
                            </div>
                        </>
                    )}
                    {externalMovie.Availability === "" ? (
                        <></>
                    ) : (
                        <>
                            <div className="movie__collapsibleDetails">
                                <span className="descriptor">
                                    How to Watch:
                                </span>{" "}
                                {/* {correctAvailabilityString(externalMovie)} */}
                            </div>
                        </>
                    )}
                    {externalMovie.UserScore === "" ? (
                        <></>
                    ) : (
                        <>
                            <div className="movie__collapsibleDetails">
                                <span className="descriptor">Your Score:</span>{" "}
                                {externalMovie.UserScore}/10
                            </div>
                        </>
                    )}
                    {externalMovie.UserReview === "" ? (
                        <></>
                    ) : (
                        <>
                            <div className="movie__review">
                                <span className="descriptor">Review:</span>{" "}
                                {externalMovie.UserReview}
                            </div>
                        </>
                    )}
                </>
            )
        } else {
            return (<></>)
        }
    }

    useEffect(() => {
        getAllCategories().then((categoriesFromAPI) => {
            setCategories(categoriesFromAPI)
        })
    }, [])

    useEffect(() => {
        getAllAvailability().then((availabilityFromAPI) => {
            setWatchAvailability(availabilityFromAPI)
        })
    }, [])
   
    const posterAltTextString = `${externalMovie.Title} poster`
    const averageRating = getAverageRating(externalMovie)

    return (
        <div className="form__formAndPreviewContainer">
            <div className="form__movieFormContainer">
                <h2 className="form__titleHeader">New Movie</h2>

                <fieldset className="form__searchContainer">
                    <legend>Search For A Movie</legend>
                    <div className="form__searchInputContainer">
                        <label hidden>Movie Title:</label>
                        <input
                            type="text"
                            id="title"
                            onChange={handleControlledInputChange}
                            required
                            autoFocus
                            className="form__leftInput"
                            placeholder="Movie title"
                        />
                        <label hidden>Year (optional):</label>
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
                {/* -------------------- begin user inputs -------------------- */}
                <fieldset className="form__searchContainer">
                    <legend>Add Your Info On This Movie</legend>
                    <fieldset className="form__nestedFieldset">
                        <label
                            className="form__labelText"
                            htmlFor="ListCategory"
                        >
                            Add to lists:
                        </label>
                        <br />
                        <select
                            value={externalMovie.ListCategory}
                            name="ListCategory"
                            id="ListCategory"
                            onChange={handleSelectMultipleChange}
                            className="form__control"
                        >
                            <option value="0">Select all that apply</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.name}>
                                    {cat.categoryName}
                                </option>
                            ))}
                        </select>
                    </fieldset>

                    <fieldset className="form__nestedFieldset">
                        <label className="form__labelText" htmlFor="Watched">
                            Have you watched it?{" "}
                        </label>
                        <br />
                        <select
                            value={externalMovie.Watched}
                            name="Watched"
                            id="Watched"
                            onChange={handleUserAdditions}
                            className="form__control"
                        >
                            <option value="0">Select one</option>
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </fieldset>
                    <fieldset className="form__nestedFieldset">
                        <label
                            className="form__labelText"
                            htmlFor="Availability"
                        >
                            How to Watch:
                        </label>
                        <select
                            value={externalMovie.Availability}
                            name="Availability"
                            id="Availability"
                            onChange={handleSelectMultipleChange}
                            className="form__control"
                        >
                            <option value="0">Select all that apply</option>
                            {watchAvailability.map((availabilityObj) => (
                                <option
                                    key={availabilityObj.id}
                                    value={availabilityObj.serviceName}
                                >
                                    {availabilityObj.serviceName}
                                </option>
                            ))}
                        </select>
                    </fieldset>
                    <fieldset className="form__nestedFieldset">
                        <label className="form__labelText" htmlFor="UserScore">
                            Score:
                        </label>
                        <input
                            type="number"
                            min={0}
                            max={10}
                            id="UserScore"
                            onChange={handleUserAdditions}
                            required
                            autoFocus
                            className="form__control"
                            placeholder="Your score"
                            value={externalMovie.UserScore}
                        />
                    </fieldset>
                    <fieldset className="form__nestedFieldset">
                        <label className="form__labelText" htmlFor="UserReview">
                            Your Review:
                        </label>
                        <br />
                        <textarea
                            id="UserReview"
                            onChange={handleUserAdditions}
                            autoFocus
                            className="form__control"
                            placeholder="Write a brief review"
                            value={externalMovie.UserReview}
                        />
                    </fieldset>
                    {/* TODO: handle user input in preview  */}
                </fieldset>
                {/* -------------------- end user inputs -------------------- */}
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
                    {showUserInputPreview()}
                </div>
            </div>
        </div>
    )
}

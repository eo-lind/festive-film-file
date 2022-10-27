import React, { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import {
    updateMovie,
    getMovieById,
} from "../../modules/MovieManager"
import { getAllCategories } from "../../modules/CategoryManager"
import { getAllAvailability } from "../../modules/AvailabilityManager"
import { getAverageRating, correctCategoryString, correctAvailabilityString } from "../helpers/Helpers"
import "../forms.css"

export const MovieEditForm = () => {
    const [movie, setMovie] = useState({
        Title: "",
        Year: "",
        Rated: "",
        Released: "",
        Runtime: "",
        Genre: "",
        Director: "",
        Writer: "",
        Actors: "",
        Plot: "",
        Language: "",
        Country: "",
        Awards: "",
        Poster: "",
        Ratings: "",
        Metascore: "",
        imdbRating: "",
        imdbVotes: "",
        imdbID: "",
        Type: "",
        DVD: "",
        BoxOffice: "",
        Production: "",
        Website: "",
        ListCategory: "",
        Availability: "",
        Watched: "",
        UserReview: "",
        UserScore: "",
    })

    const [categories, setCategories] = useState([])
    const [watchAvailability, setWatchAvailability] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { movieId } = useParams()
    const navigate = useNavigate()

    const handleControlledInputChange = (event) => {
        const stateToChange = { ...movie }

        stateToChange[event.target.id] = event.target.value

        // if (event.target.id.includes("Id")) {
        //     let selectedVal = parseInt(selectedVal)
        //   }
        setMovie(stateToChange)
    }

    const handleSelectMultipleChange = (event) => {
        const stateToChange = { ...movie }

        stateToChange[event.target.id] += event.target.value + ", "

        setMovie(stateToChange)
    }

    const updateExistingMovie = (event) => {
        event.preventDefault()
        setIsLoading(true)

        const editedMovie = {
            Title: movie.Title,
            Year: movie.Year,
            Rated: movie.Rated,
            Released: movie.Released,
            Runtime: movie.Runtime,
            Genre: movie.Genre,
            Director: movie.Director,
            Writer: movie.Writer,
            Actors: movie.Actors,
            Plot: movie.Plot,
            Language: movie.Language,
            Country: movie.Country,
            Awards: movie.Awards,
            Poster: movie.Poster,
            Ratings: movie.Ratings,
            Metascore: movie.Metascore,
            imdbRating: movie.imdbRating,
            imdbVotes: movie.imdbVotes,
            imdbID: movie.imdbID,
            Type: movie.Type,
            DVD: movie.DVD,
            BoxOffice: movie.BoxOffice,
            Production: movie.Production,
            Website: movie.Website,
            ListCategory: movie.ListCategory,
            Availability: movie.Availability,
            Watched: movie.Watched,
            UserReview: movie.UserReview,
            UserScore: movie.UserScore,
            id: movie.id,
        }

        updateMovie(editedMovie).then(() => navigate("/movies"))
    }

    useEffect(() => {
        getMovieById(movieId).then((movie) => {
            setMovie(movie)
            setIsLoading(false)
        })
    }, [])

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

    const posterAltTextString = `${movie.Title} poster`

    const averageRating = getAverageRating(movie)

    return (
        <div className="form__formAndPreviewContainer">
            <form className="form__movieFormContainer">
                <h2 className="form__titleHeader">Edit Movie Entry</h2>

                {/* ---------- user-generated input below ---------- */}
                <div className="form__dropdownContainer">
                    <fieldset className="form__borderlessFieldsetDropdown">
                        <label htmlFor="category">
                            Select all applicable lists:
                        </label>
                        <br />
                        <select
                            value={movie.ListCategory}
                            name="listCategory"
                            id="listCategory"
                            onChange={handleSelectMultipleChange}
                            className="form__control"
                        >
                            <option value="0">Select any</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.name}>
                                    {cat.categoryName}
                                </option>
                            ))}
                        </select>
                    </fieldset>

                    <fieldset className="form__borderlessFieldsetDropdown">
                        <label htmlFor="watched">Have you watched it? </label>
                        <br />
                        <select
                            value={movie.Watched}
                            name="watched"
                            id="watched"
                            onChange={handleControlledInputChange}
                            className="form__control"
                        >
                            <option value="0">Select one</option>
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </fieldset>
                </div>
                <div className="form__dropdownContainer">
                    <fieldset className="form__borderlessFieldsetDropdown">
                        <label htmlFor="availability">How to Watch:</label>
                        <p className="form__instructionLabel">
                            Select all that apply.
                        </p>
                        <select
                            value={movie.Availability}
                            name="availability"
                            id="availability"
                            onChange={handleSelectMultipleChange}
                            className="form__control"
                        >
                            <option value="0">Select any</option>
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
                    <fieldset className="form__borderlessFieldsetDropdown">
                        <label htmlFor="userScore">Score:</label>
                        <p className="form__instructionLabel">
                            Select a score between 0 and 10, 10 being the best.
                        </p>
                        <input
                            type="number"
                            min={0}
                            max={10}
                            id="userScore"
                            onChange={handleControlledInputChange}
                            required
                            autoFocus
                            className="form__control"
                            placeholder="Your score"
                            value={movie.UserScore}
                        />
                    </fieldset>
                </div>
                <fieldset className="form__borderlessFieldset-lastItem">
                    <label htmlFor="userReview">Your Review:</label>
                    <br />
                    <textarea
                        id="userReview"
                        onChange={handleControlledInputChange}
                        autoFocus
                        className="form__control"
                        placeholder="Write a brief review"
                        value={movie.UserReview}
                    />
                </fieldset>

                {/* ---------- user-generated input above ---------- */}

                {/* ---------- external origin film data below ---------- */}
                <fieldset className="form__borderlessFieldset">
                    <label htmlFor="website">Website:</label>
                    <br />
                    <input
                        type="text"
                        id="website"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form__control"
                        placeholder="URL"
                        value={movie.Website}
                    />
                </fieldset>
                {/* ---------- external origin film data above ---------- */}
                <div className="form__btnContainer">
                    <Link
                        to={`/movies/${movie.id}`}
                        id="form__leftBtnWrapperEdit"
                    >
                        <button className="btn__general" id="form__leftBtnEdit">
                            Cancel
                        </button>
                    </Link>

                    <button
                        type="button"
                        disabled={isLoading}
                        className="btn__general"
                        id="form__rightButtonEdit"
                        onClick={updateExistingMovie}
                    >
                        Update
                    </button>
                </div>
            </form>
            <div className="form__previewContainer">
                <div className="card" id="card__preview">
                    <h2 className="form__titleHeader">Preview</h2>
                    {/* -------------------- basic movie details below -------------------- */}
                    {movie.poster === "" ? (
                        <></>
                    ) : (
                        <img
                            src={movie.Poster}
                            alt={posterAltTextString}
                            className="movie__img"
                        />
                    )}

                    <section className="movie__titleAndTopDetails">
                        <h3 className="movie__title">
                            {movie.Website === "N/A" || movie.Website === "" ? (
                                movie.title
                            ) : (
                                <a href={movie.Website} target="_blank">
                                    {movie.Title}
                                </a>
                            )}
                        </h3>
                        <p
                            className="movie__yearRatingAndRuntime"
                            id="movie__YearAndRating"
                        >
                            {movie.Year}{" "}
                            {movie.Rated === "" ? "" : `(${movie.Rated})`}
                        </p>
                        <p className="movie__yearRatingAndRuntime">
                            {movie.Runtime}
                        </p>
                    </section>

                    <div className="movie__plot">{movie.Plot}</div>
                    <div className="movie__genre">{movie.Genre}</div>
                    {/* -------------------- basic movie details above -------------------- */}
                    {/* ----------------------- user input below ------------------------ */}
                    <details>
                        <summary className="movie__collapsibleDetailsSummary">
                            Your contributions
                        </summary>

                        {movie.ListCategory === "" ? (
                            <></>
                        ) : (
                            <>
                                <div className="movie__collapsibleDetails">
                                    <span className="descriptor">Lists:</span>{" "}
                                    {correctCategoryString(movie)}
                                </div>
                            </>
                        )}

                        {movie.Watched === "" ? (
                            <></>
                        ) : (
                            <>
                                <div className="movie__collapsibleDetails">
                                    <span className="descriptor">Watched?</span>{" "}
                                    {movie.Watched}
                                </div>
                            </>
                        )}
                        {movie.Availability === "" ? (
                            <></>
                        ) : (
                            <>
                                <div className="movie__collapsibleDetails">
                                    <span className="descriptor">
                                        How to Watch:
                                    </span>{" "}
                                    {correctAvailabilityString(movie)}
                                </div>
                            </>
                        )}
                        {movie.UserScore === "" ? (
                            <></>
                        ) : (
                            <>
                                <div className="movie__collapsibleDetails">
                                    <span className="descriptor">
                                        Your Score:
                                    </span>{" "}
                                    {movie.UserScore}/10
                                </div>
                            </>
                        )}
                        {movie.UserReview === "" ? (
                            <></>
                        ) : (
                            <>
                                <div className="movie__review">
                                    <span className="descriptor">Review:</span>{" "}
                                    {movie.UserReview}
                                </div>
                            </>
                        )}
                    </details>
                    {/* ----------------------- user input above ------------------------ */}

                    {/* -------------------- collapsed details below -------------------- */}
                    <details>
                        <summary className="movie__collapsibleDetailsSummary">
                        More film details 
                        </summary>
                        <div className="movie__collapsibleDetails">
                            {movie.Actors !== "" ? (
                                <>
                                    <span className="descriptor">
                                        Starring:
                                    </span>{" "}
                                    {movie.Actors}
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="movie__collapsibleDetails">
                            {movie.Director !== "" ? (
                                <>
                                    <span className="descriptor">
                                        Directed By:
                                    </span>{" "}
                                    {movie.Director}
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="movie__collapsibleDetails">
                            {movie.Writer !== "" ? (
                                <>
                                    <span className="descriptor">
                                        Written By:
                                    </span>{" "}
                                    {movie.Writer}
                                </>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div className="movie__collapsibleDetails">
                            {averageRating === "" || averageRating === NaN ? (
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

import React, { useState, useEffect } from "react"
import {
    getMovieById,
    deleteMovie,
} from "../../modules/MovieManager"
import { useParams, useNavigate, Link } from "react-router-dom"
import {
    getAverageRating,
    correctCategoryString,
    correctAvailabilityString,
} from "../helpers/Helpers"
import "./movieDetail.css"


export const MovieDetail = () => {
    // const [movies, setMovies] = useState([])
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
        UserScore: ""
    })
    const [isLoading, setIsLoading] = useState(true)
    const { movieId } = useParams()
    const navigate = useNavigate()

    const handleDeleteMovie = () => {
        setIsLoading(true)
        deleteMovie(movieId).then(() => navigate("/movies"))
    }

    useEffect(() => {
        getMovieById(movieId).then((movie) => {
            setMovie({
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
            })
            setIsLoading(false)
        })
    }, [movieId])


    const confirmation = () => {
        let result = window.confirm(
            `Are you sure you want to delete ${movie.Title}?`
        )
        if (result) {
            handleDeleteMovie(movie.id)
        }
    }

    const posterAltTextString = `${movie.Title} poster`

    const averageRating = getAverageRating(movie)

    

    return (
        <div className="card" id="card__detailView">
            {/* -------------------- basic movie details below -------------------- */}
            {movie.Poster === "" ? (
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
                        movie.Title
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
                    {movie.Year} {movie.Rated === "" ? "" : `(${movie.Rated})`}
                </p>
                <p className="movie__yearRatingAndRuntime">{movie.Runtime}</p>
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
                            <span className="descriptor">How to Watch:</span>{" "}
                            {correctAvailabilityString(movie)}
                        </div>
                    </>
                )}
                {movie.UserScore === "" ? (
                    <></>
                ) : (
                    <>
                        <div className="movie__collapsibleDetails">
                            <span className="descriptor">Your Score:</span>{" "}
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
                            <span className="descriptor">Starring:</span>{" "}
                            {movie.Actors}
                        </>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="movie__collapsibleDetails">
                    {movie.Director !== "" ? (
                        <>
                            <span className="descriptor">Directed By:</span>{" "}
                            {movie.Director}
                        </>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="movie__collapsibleDetails">
                    {movie.Writer !== "" ? (
                        <>
                            <span className="descriptor">Written By:</span>{" "}
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
                            <span className="descriptor">Average Rating:</span>{" "}
                            {averageRating}%
                        </>
                    )}
                </div>
            </details>
            {/* -------------------- collapsed details above -------------------- */}

            <div className="movieDetail__btnContainer">
                <Link
                    to={`/movies/${movie.id}/edit`}
                    id="movieDetail__editBtnWrapper"
                >
                    <button type="button" id="movieDetail__editBtn">
                        Edit
                    </button>
                </Link>
                <button
                    type="button"
                    id="movieDetail__deleteBtn"
                    disabled={isLoading}
                    onClick={confirmation}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

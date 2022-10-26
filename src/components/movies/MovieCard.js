import React from "react"
import { Link } from "react-router-dom"
import "./movie.css"

export const MovieCard = ({ movie, posterAltTextString }) => (
    <div className="card" id="movie__card">
        <Link
            to={`/movies/${movie.id}`}
            id="movie__detailsBtnWrapper"
        >
            <img
                src={movie.Poster}
                alt={posterAltTextString}
                className="movie__img"
            />
        </Link>
    </div>
)

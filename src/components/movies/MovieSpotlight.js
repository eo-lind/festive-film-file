import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getMovieById } from "../../modules/MovieManager"

export const MovieSpotlight = ({ movieId }) => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    getMovieById(movieId).then((movie) => {
      setMovie(movie)
    })
  }, [movieId])

  const posterAltTextString = `${movie.Title} poster`

  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="movieSpotlight__card">
        <img src={movie.Poster}
        alt={posterAltTextString}
        className="movieSpotlight__img" />
        <h4 className="movieSpotlight__header">{movie.Title}</h4>
      </div>
    </Link>
  )
}
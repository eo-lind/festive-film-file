import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getExternalMovieByTitle, addMovie, getMovieByTitle} from "../../modules/MovieManager"


export const MovieSearchByTitle = () => {
  const [externalMovie, setExternalMovie] = useState({
    Title: ""
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

        addMovie(externalMovie)
        .then(() => {
            navigate("/movies")})
 

        
        // TODO: navigate to an edit form that allows users to add user input to new movie object (same idea as movie edit form)

    }

    const handleClickSearch = (event) => {
        event.preventDefault()

        getExternalMovieByTitle(searchTerm.title).then((movieFromExternalAPI) => {
            
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
        })


    }

     
  return (
      <>
          you searched: <br />
          <strong>{externalMovie.Title}</strong> ({externalMovie.Year}) -{" "}
          {externalMovie.Plot}
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
          {/* button to Add searched movie */}
          {/* clicking button sets movie with external movie data then navigates to edit form */}
      </>
  )
}
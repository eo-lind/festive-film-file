import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getExternalMovieByTitle, addMovie } from "../../modules/MovieManager"


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


    // new below
    const handleClickSaveMovie = (event) => {
        event.preventDefault()
 
        addMovie(externalMovie).then(() => navigate("/movies"))
        // }
    }

    // new above

    const handleClickSearch = (event) => {
        event.preventDefault()

        getExternalMovieByTitle(searchTerm.title).then((movieFromExternalAPI) => {
            setExternalMovie(movieFromExternalAPI)
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
import { apiKey } from "../other/omdb"

const remoteURL = "http://localhost:8088"
const externalURL = "http://www.omdbapi.com"

// -------------------- get movies from external API below -------------------- //

// get movie by title
export const getExternalMovieByTitle = (titleInput) => {
    return fetch(`${externalURL}/?t=${titleInput}&plot=full&apikey=${apiKey}`).then((res) => res.json())
}

// get movie by title and year
export const getExternalMovieByTitleAndYear = (titleInput, yearInput) => {
    return fetch(
        `${externalURL}/?t=${titleInput}&y=${yearInput}&plot=full&apikey=${apiKey}`
    ).then((res) => res.json())
}

// get movie by IMDb id
export const getExternalMovieByImdbId = (imdbIdInput) => {
    return fetch(
        `${externalURL}/?i=${imdbIdInput}&plot=full&apikey=${apiKey}`
    ).then((res) => res.json())
}

// -------------------- get movies from external API above -------------------- //

// get by id
export const getMovieById = (id) => {
    return fetch(`${remoteURL}/movies/${id}`).then((res) => res.json())
}


// get all
export const getAllMovies = () => {
    return fetch(`${remoteURL}/movies?_sort=title`).then((res) => res.json())
}

// get internal movie by title
export const getMovieByTitle = (title) => {
    return fetch(`${remoteURL}/movies/${title}`).then((res) => res.json())
}

// -------------------- filtered results below -------------------- //

// get *ALL* watched
export const getAllWatchedMovies = () => {
    return fetch(
        `${remoteURL}/movies?Watched=yes&_sort=Title`
    ).then((res) => res.json())
}

// get *ALL* unwatched
export const getAllUnwatchedMovies = () => {
    return fetch(`${remoteURL}/movies?Watched=no&_sort=Title`).then((res) =>
        res.json()
    )
}

// get all in Christmas list
export const getAllChristmasList = () => {
    return fetch(
        `${remoteURL}/movies?ListCategory_like=Christmas&_sort=Title`
    ).then((res) => res.json())
}

// get all watched in Christmas list
export const getAllWatchedChristmasList = () => {
    return fetch(
        `${remoteURL}/movies?ListCategory_like=Christmas&Watched=yes&_sort=Title`
    ).then((res) => res.json())
}

// get all unwatched in Christmas list
export const getAllUnwatchedChristmasList = () => {
    return fetch(
        `${remoteURL}/movies?ListCategory_like=Christmas&Watched=no&_sort=Title`
    ).then((res) => res.json())
}

// get all in Halloween list
export const getAllHalloweenList = () => {
    return fetch(
        `${remoteURL}/movies?ListCategory_like=Halloween&_sort=title`
    ).then((res) => res.json())
}

// get all watched in Halloween list
export const getAllWatchedHalloweenList = () => {
    return fetch(
        `${remoteURL}/movies?ListCategory_like=Halloween&watched=yes&_sort=title`
    ).then((res) => res.json())
}

// get all unwatched in Halloween list
export const getAllUnwatchedHalloweenList = () => {
    return fetch(
        `${remoteURL}/movies?ListCategory_like=Halloween&watched=no&_sort=title`
    ).then((res) => res.json())
}

// -------------------- filtered results above -------------------- //

// delete
export const deleteMovie = (id) => {
    return fetch(`${remoteURL}/movies/${id}`, {
        method: "DELETE",
    }).then((res) => res.json())
}

// add
export const addMovie = (newMovie) => {
    return fetch(`${remoteURL}/movies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
    }).then((res) => res.json())
}

// edit
export const updateMovie = (editedMovie) => {
    return fetch(`${remoteURL}/movies/${editedMovie.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedMovie),
    }).then((data) => data.json())
}

// get a random movie id
export const getRandomId = () => {
    return fetch(`${remoteURL}/movies`)
        .then((result) => result.json())
        .then((movies) => {
            const randomIndex = Math.floor(Math.random() * movies.length)
            const randomMovie = movies[randomIndex]
            return randomMovie.id
        })
}

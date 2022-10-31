import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { ArcElement } from "chart.js"
import Chart from "chart.js/auto"
import { getAllMovies, getAllWatchedMovies, getAllHalloweenList, getAllWatchedHalloweenList, getAllChristmasList, getAllWatchedChristmasList } from "../../modules/MovieManager";

export const AllMoviesPieChart = () => {
    const [movies, setMovies] = useState([])
    const [watchedMovies, setWatchedMovies] = useState([])

    const getMovies = () => {
        getAllMovies().then((moviesFromAPI) => {
            setMovies(moviesFromAPI)
        })
        getAllWatchedMovies().then((moviesFromAPI) => {
            setWatchedMovies(moviesFromAPI)
        })
    }

    useEffect(() => {
        getMovies()
    }, [])

    const allMoviesCount = movies.length
    const watchedMoviesCount = watchedMovies.length

    Chart.register(ArcElement)

    const labels = ["All Movies", "Watched"]
    const data = {
        labels: labels,
        datasets: [
            {
                label: "All Movies",
                backgroundColor: ["#ffadad", "#ffd6a5"],
                borderColor: "white",
                data: [allMoviesCount, watchedMoviesCount],
            },
            // {
            //     label: "My second dataset",
            //     backgroundColor: ["yellow", "green"],
            //     borderColor: "white",
            //     data: [70, 30],
            // },
            // {
            //     label: "My third dataset",
            //     backgroundColor: ["blue", "purple"],
            //     borderColor: "white",
            //     data: [75, 25],
            // },
        ],
    }

    return (
        <div>
            <Pie data={data} />
        </div>
    )
}

export const HalloweenMoviesPieChart = () => {
    const [movies, setMovies] = useState([])
    const [watchedMovies, setWatchedMovies] = useState([])

    const getMovies = () => {
        getAllHalloweenList().then((moviesFromAPI) => {
            setMovies(moviesFromAPI)
        })
        getAllWatchedHalloweenList().then((moviesFromAPI) => {
            setWatchedMovies(moviesFromAPI)
        })
    }

    useEffect(() => {
        getMovies()
    }, [])

    const allMoviesCount = movies.length
    const watchedMoviesCount = watchedMovies.length

    Chart.register(ArcElement)

    const labels = ["All Halloween", "Watched"]
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Halloween Movies",
                backgroundColor: ["#fdffb6", "#caffbf"],
                borderColor: "white",
                data: [allMoviesCount, watchedMoviesCount],
            },
        ],
    }

    return (
        <div>
            <Pie data={data} />
        </div>
    )
}

export const ChristmasMoviesPieChart = () => {
    const [movies, setMovies] = useState([])
    const [watchedMovies, setWatchedMovies] = useState([])

    const getMovies = () => {
        getAllChristmasList().then((moviesFromAPI) => {
            setMovies(moviesFromAPI)
        })
        getAllWatchedChristmasList().then((moviesFromAPI) => {
            setWatchedMovies(moviesFromAPI)
        })
    }

    useEffect(() => {
        getMovies()
    }, [])

    const allMoviesCount = movies.length
    const watchedMoviesCount = watchedMovies.length

    Chart.register(ArcElement)

    const labels = ["All Christmas", "Watched"]
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Christmas Movies",
                backgroundColor: ["#9bf6ff", "#bdb2ff"],
                borderColor: "white",
                data: [allMoviesCount, watchedMoviesCount],
            },
        ],
    }

    return (
        <div>
            <Pie data={data} />
        </div>
    )
}
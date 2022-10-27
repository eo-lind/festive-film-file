import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { MovieList, MovieListWatched, MovieListUnwatched } from "./movies/MovieList"
import { MovieListHalloween, MovieListHalloweenWatched, MovieListHalloweenUnwatched } from "./movies/MovieListHalloween"
import { MovieListChristmas, MovieListChristmasWatched, MovieListChristmasUnwatched } from "./movies/MovieListChristmas"
import { MovieDetail } from "./movies/MovieDetail"
import { MovieForm } from "./movies/MovieForm"
import { MovieEditForm } from "./movies/MovieEditForm"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/movies" element={<MovieList />} />
                <Route path="/movies-watched" element={<MovieListWatched />} />
                <Route path="/movies-unwatched" element={<MovieListUnwatched />} />
                <Route path="/halloween-movies" element={<MovieListHalloween />} />
                <Route path="/halloween-movies-watched" element={<MovieListHalloweenWatched />} />
                <Route path="/halloween-movies-unwatched" element={<MovieListHalloweenUnwatched />} />
                <Route path="/christmas-movies" element={<MovieListChristmas />} />
                <Route path="/christmas-movies-watched" element={<MovieListChristmasWatched />} />
                <Route path="/christmas-movies-unwatched" element={<MovieListChristmasUnwatched />} />
                <Route
                    exact
                    path="/movies/:movieId"
                    element={<MovieDetail />}
                />
                <Route path="/movies/create" element={<MovieForm />} />
                <Route
                    path="/movies/:movieId/edit"
                    element={<MovieEditForm />}
                />
            </Routes>
        </>
    )
}

import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./nav.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <section className="navbar__container">
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" id="navbar__home" to="/">
                        Home
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        id="navbar__movies"
                        to="/movies"
                    >
                        All Movies
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        id="navbar__movies"
                        to="/halloween-movies"
                    >
                        Halloween Movies
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        id="navbar__movies"
                        to="/christmas-movies"
                    >
                        Christmas Movies
                    </Link>
                </li>
                <li className="navbar__item">
                    <button
                        type="button"
                        className="btn__add"
                        onClick={() => {
                            navigate("/movies/create")
                        }}
                    >
                        Add Movie
                    </button>
                </li>
                <li className="navbar__item">
                    <button
                        type="button"
                        className="btn__add"
                        onClick={() => {
                            navigate("/categories/create")
                        }}
                    >
                        Add List
                    </button>
                </li>
                <li className="navbar__item">
                    <button
                        type="button"
                        className="btn__add"
                        onClick={() => {
                            navigate("/availability/create")
                        }}
                    >
                        Add Streaming Service
                    </button>
                </li>
            </ul>
        </section>
    )
}
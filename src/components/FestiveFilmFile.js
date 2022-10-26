import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Footer } from "./footer/Footer"
import { BrowserRouter } from "react-router-dom"

export const FestiveFilmFile = () => (
    <>
        <div className="columnContainer">
            <BrowserRouter>
                <NavBar />
                <ApplicationViews />
                <Footer />
            </BrowserRouter>
        </div>
    </>
)

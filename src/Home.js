import React, { useState, useEffect } from "react"
import { MovieSpotlight } from "./components/movies/MovieSpotlight"
import { getRandomId } from "./modules/MovieManager"
import "./home.css"

export const Home = () => {
    const [spotlightId, setSpotlightId] = useState(0)

    const refreshSpotlightMovie = () => {
        getRandomId().then(setSpotlightId)
    }

    useEffect(() => {
        refreshSpotlightMovie()
    }, [])

    return (
        <div className="viewBody">
            <section className="home__topSection">
                <h1 className="home__mainHeader">Festive Film File</h1>
                <p className="home__subhead">
                    Find the right movie for the occasion
                </p>
            </section>
            <section className="home__columnContainer">
                <div className="home__leftColumn">
                    <h3>Put some kind of content here!</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Nisl purus in mollis nunc. Nam libero
                        justo laoreet sit amet cursus. Ac auctor augue mauris
                        augue neque. Justo eget magna fermentum iaculis eu non.
                        Arcu cursus euismod quis viverra. Nisl vel pretium
                        lectus quam id. Auctor neque vitae tempus quam
                        pellentesque nec nam aliquam. Non pulvinar neque laoreet
                        suspendisse interdum consectetur. At auctor urna nunc id
                        cursus metus aliquam eleifend. Elementum nisi quis
                        eleifend quam adipiscing vitae proin sagittis. Id donec
                        ultrices tincidunt arcu non sodales neque. Iaculis at
                        erat pellentesque adipiscing commodo elit at imperdiet
                        dui. Facilisis volutpat est velit egestas. Ultrices eros
                        in cursus turpis massa tincidunt. Eget mauris pharetra
                        et ultrices. Viverra mauris in aliquam sem fringilla ut.
                        Ultrices neque ornare aenean euismod. A diam maecenas
                        sed enim.
                    </p>
                    <p>
                        Cras adipiscing enim eu turpis. Sed blandit libero
                        volutpat sed cras ornare arcu dui vivamus. Risus nullam
                        eget felis eget. Feugiat vivamus at augue eget arcu.
                        Eget mauris pharetra et ultrices neque. Faucibus ornare
                        suspendisse sed nisi lacus sed viverra tellus in.
                        Laoreet id donec ultrices tincidunt. Nam libero justo
                        laoreet sit amet cursus. Tellus mauris a diam maecenas
                        sed enim. Turpis egestas sed tempus urna et pharetra
                        pharetra. Vitae elementum curabitur vitae nunc sed velit
                        dignissim sodales ut. Augue interdum velit euismod in
                        pellentesque massa. Tempor orci eu lobortis elementum
                        nibh tellus molestie nunc. Elit pellentesque habitant
                        morbi tristique senectus et netus. Egestas sed sed risus
                        pretium quam vulputate dignissim suspendisse in. Et
                        malesuada fames ac turpis egestas. Lorem ipsum dolor sit
                        amet consectetur adipiscing elit. Pharetra convallis
                        posuere morbi leo urna. Bibendum enim facilisis gravida
                        neque convallis a.
                    </p>
                    <p>
                        <a href="#">Justo laoreet</a> sit amet cursus sit amet
                        dictum sit amet. Neque egestas congue quisque egestas.
                        Quisque egestas diam in arcu cursus euismod quis. Urna
                        et pharetra pharetra massa massa ultricies. Quis enim
                        lobortis scelerisque fermentum dui faucibus. In aliquam
                        sem fringilla ut morbi tincidunt augue interdum.
                        Convallis tellus id interdum velit. Auctor neque vitae
                        tempus quam pellentesque nec nam aliquam. Tincidunt
                        vitae semper quis lectus nulla. Venenatis lectus magna
                        fringilla urna. Sit amet mauris commodo quis imperdiet
                        massa tincidunt nunc pulvinar. Facilisi etiam dignissim
                        diam quis enim lobortis scelerisque. Egestas maecenas
                        pharetra convallis posuere morbi leo. Non sodales neque
                        sodales ut etiam sit amet nisl. Adipiscing elit
                        pellentesque habitant morbi tristique. Malesuada nunc
                        vel risus commodo viverra maecenas accumsan lacus.
                    </p>
                </div>
                <div className="home__rightColumn">
                    <h3 className="home__rightcolumnHeader">
                        Movie Spotlight
                    </h3>
                    {spotlightId && (
                        <MovieSpotlight movieId={spotlightId} />
                    )}
                    <button onClick={refreshSpotlightMovie}>
                        Refresh &#x27f3;
                    </button>
                </div>
            </section>
        </div>
    )
}

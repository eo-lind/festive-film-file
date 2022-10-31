import React, { useEffect, useState } from "react"
import { getAllMovies, getAllWatchedMovies, getAllUnwatchedMovies, getAllChristmasList, getAllWatchedChristmasList, getAllUnwatchedChristmasList, getAllHalloweenList, getAllWatchedHalloweenList, getAllUnwatchedHalloweenList } from "../../modules/MovieManager";


export const CountAllMovies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
      getAllMovies().then((moviesFromAPI) => {
          setMovies(moviesFromAPI)
      })
  }

  useEffect(() => {
      getMovies()
  }, [])


    const count = movies.length

    return (
      count
    )
  }

export const CountAllWatchedMovies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
      getAllWatchedMovies().then((moviesFromAPI) => {
          setMovies(moviesFromAPI)
      })
  }

  useEffect(() => {
      getMovies()
  }, [])


    const count = movies.length

    return (
      count
    )
}

export const CountAllUnwatchedMovies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
      getAllUnwatchedMovies().then((moviesFromAPI) => {
          setMovies(moviesFromAPI)
      })
  }

  useEffect(() => {
      getMovies()
  }, [])


    const count = movies.length

    return (
      count
    )
}

export const CountAllChristmasMovies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
      getAllChristmasList().then((moviesFromAPI) => {
          setMovies(moviesFromAPI)
      })
  }

  useEffect(() => {
      getMovies()
  }, [])


    const count = movies.length

    return (
      count
    )
}

export const CountAllWatchedChristmasMovies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
      getAllWatchedChristmasList().then((moviesFromAPI) => {
          setMovies(moviesFromAPI)
      })
  }

  useEffect(() => {
      getMovies()
  }, [])


    const count = movies.length

    return (
      count
    )
}

export const CountAllUnwatchedChristmasMovies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
      getAllUnwatchedChristmasList().then((moviesFromAPI) => {
          setMovies(moviesFromAPI)
      })
  }

  useEffect(() => {
      getMovies()
  }, [])


    const count = movies.length

    return (
      count
    )
}

export const CountAllHalloweenMovies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
      getAllHalloweenList().then((moviesFromAPI) => {
          setMovies(moviesFromAPI)
      })
  }

  useEffect(() => {
      getMovies()
  }, [])


    const count = movies.length

    return (
      count
    )
}

export const CountAllWatchedHalloweenMovies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
      getAllWatchedHalloweenList().then((moviesFromAPI) => {
          setMovies(moviesFromAPI)
      })
  }

  useEffect(() => {
      getMovies()
  }, [])


    const count = movies.length

    return (
      count
    )
}

export const CountAllUnwatchedHalloweenMovies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
      getAllUnwatchedHalloweenList().then((moviesFromAPI) => {
          setMovies(moviesFromAPI)
      })
  }

  useEffect(() => {
      getMovies()
  }, [])


    const count = movies.length

    return count
}
  

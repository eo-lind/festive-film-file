export const getAverageRating = (movie) => {
        const checkIfMetaScoreExists = () => {
            if (movie.Metascore !== "" && movie.Metascore !== "N/A") {
                return true
            } else {
                return false
            }
        }

        const checkIfImdbRatingExists = () => {
            if (movie.imdbRating !== "" && movie.imdbRating !== "N/A") {
                return true
            } else {
                return false
            }
        }

        const checkIfUserScoreExists = () => {
            if (movie.UserScore !== "" && movie.UserScore !== "N/A") {
                return true
            } else {
                return false
            }
        }

        const doesUserScoreExist = checkIfUserScoreExists()
        const doesMetaScoreExist = checkIfMetaScoreExists()
        const doesImdbRatingExist = checkIfImdbRatingExists()

        const userScore = movie.UserScore / 10
        const metascore = movie.Metascore / 100
        const imdbRating = movie.imdbRating / 10

        if (doesUserScoreExist && doesMetaScoreExist && doesImdbRatingExist) {
            const sum = userScore + metascore + imdbRating
            const avgScore = sum / 3
            // const scoreAsRoundedPercentage = Math.round(avgScore * 100)
            return Math.round(avgScore * 100)
        } else if (doesUserScoreExist && !doesMetaScoreExist && !doesImdbRatingExist) {
            // const scoreAsRoundedPercentage = Math.round(userScore * 100)
            return Math.round(userScore * 100)
        } else if (!doesUserScoreExist && !doesMetaScoreExist && doesImdbRatingExist) {
            // const scoreAsRoundedPercentage = Math.round(imdbRating * 100)
            return Math.round(imdbRating * 100)
        } else if (!doesUserScoreExist && doesMetaScoreExist && !doesImdbRatingExist) {
            return Math.round(metascore*100)
        } else if (doesUserScoreExist && doesMetaScoreExist && !doesImdbRatingExist) {
            const sum = userScore + metascore
            const avgScore = sum / 2
            const scoreAsRoundedPercentage = Math.round(avgScore * 100)
            return scoreAsRoundedPercentage
        } else if (doesUserScoreExist && !doesMetaScoreExist && doesImdbRatingExist) {
            const sum = userScore + imdbRating
            const avgScore = sum / 2
            const scoreAsRoundedPercentage = Math.round(avgScore * 100)
            return scoreAsRoundedPercentage
        } else if (!doesUserScoreExist && doesMetaScoreExist && doesImdbRatingExist) {
            const sum = metascore + imdbRating
            const avgScore = sum / 2
            const scoreAsRoundedPercentage = Math.round(avgScore * 100)
            return scoreAsRoundedPercentage
        } 
    }

    // export const correctCategoryString = (movie) => {
    //     const listString = movie.ListCategory
    //     const listCategoryPreview = listString.replace(/(^ ,)|(, $)/g, "")
    //     return listCategoryPreview
    // }

    // export const correctAvailabilityString = (movie) => {
    //     const availabilityString = movie.Availability
    //     const updatedAvailabilityString = availabilityString.replace(
    //         /(^ ,)|(, $)/g,
    //         ""
    //     )

    //     return updatedAvailabilityString
    // }
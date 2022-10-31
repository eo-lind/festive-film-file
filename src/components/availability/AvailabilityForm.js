import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { addAvailability } from "../../modules/AvailabilityManager"
import "../forms.css"

export const AvailabilityForm = () => {
    const [availability, setAvailability] = useState({
        serviceName: "",
    })

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleControlledInputChange = (event) => {
        const newAvailability = { ...availability }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newAvailability[event.target.id] = selectedVal
        setAvailability(newAvailability)
    }

    const handleClickSaveAvailability = (event) => {
        event.preventDefault()

        addAvailability(availability).then(() => navigate("/"))
    }

    return (
        <form>
            <h2 className="form__titleHeader">New Streaming Service</h2>
            <fieldset className="form__borderlessFieldset">
                <label htmlFor="serviceName">Service name:</label>
                <br />
                <input
                    type="text"
                    id="serviceName"
                    onChange={handleControlledInputChange}
                    required
                    autoFocus
                    className="form__control"
                    placeholder="Streaming service"
                    value={availability.serviceName}
                />
            </fieldset>

            <div className="form__btnContainer">
                <Link id="form__leftBtnWrapper" to="/">
                    <button
                        type="button"
                        className="btn__general"
                        id="form__leftBtn"
                    >
                        Cancel
                    </button>
                </Link>
                <button
                    type="button"
                    className="btn__general"
                    id="form__rightBtn"
                    onClick={handleClickSaveAvailability}
                >
                    Save
                </button>
                `
            </div>
        </form>
    )
}

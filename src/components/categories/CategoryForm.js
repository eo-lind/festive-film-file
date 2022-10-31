import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { addCategory } from "../../modules/CategoryManager"
import "../forms.css"

export const CategoryForm = () => {
    const [category, setCategory] = useState({
        categoryName: "",
    })

    const [isLoading, setIsLoading] = useState(false)


    const navigate = useNavigate()

    const handleControlledInputChange = (event) => {
        const newCategory = { ...category }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newCategory[event.target.id] = selectedVal
        setCategory(newCategory)
    }

    const handleClickSaveCategory = (event) => {
      event.preventDefault()

        addCategory(category).then(() => navigate("/"))
        
    }

    return (
        <form>
            <h2 className="form__titleHeader">New List</h2>
            <fieldset className="form__borderlessFieldset">
                <label htmlFor="categoryName">List name:</label>
                <br />
                <input
                    type="text"
                    id="categoryName"
                    onChange={handleControlledInputChange}
                    required
                    autoFocus
                    className="form__control"
                    placeholder="List name"
                    value={category.categoryName}
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
                    onClick={handleClickSaveCategory}
                >
                    Save
                </button>
                `
            </div>
        </form>
    )
}

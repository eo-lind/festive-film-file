const remoteURL = "http://localhost:8088"

export const getAllCategories = () => {
    return fetch(`${remoteURL}/categories?_sort=categoryName`).then((res) =>
        res.json()
    )
}

// add
export const addCategory = (newCategory) => {
    return fetch(`${remoteURL}/categories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
    }).then((res) => res.json())
}
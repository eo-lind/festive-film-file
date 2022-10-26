const remoteURL = "http://localhost:8088"

export const getAllCategories = () => {
    return fetch(`${remoteURL}/categories?_sort=categoryName`).then((res) =>
        res.json()
    )
}

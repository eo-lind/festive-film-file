const remoteURL = "http://localhost:8088"

export const getAllAvailability = () => {
    return fetch(`${remoteURL}/availability?_sort=serviceName`).then((res) =>
        res.json()
    )
}

// add
export const addAvailability = (newAvailability) => {
    return fetch(`${remoteURL}/availability`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newAvailability),
    }).then((res) => res.json())
}
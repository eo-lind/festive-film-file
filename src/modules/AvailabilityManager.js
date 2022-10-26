const remoteURL = "http://localhost:8088"

export const getAllAvailability = () => {
    return fetch(`${remoteURL}/availability?_sort=serviceName`).then((res) =>
        res.json()
    )
}

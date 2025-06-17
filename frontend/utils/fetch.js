const getFetch = async (url) => {
    const res = await fetch(`http://localhost:8000/api${url}`, {
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    if (res.ok) {
        const data = await res.json()
        return data.data
    } else {
        throw new Error(`مشکل در دریافت اطلاعات کد :${res.status}`)
    }
}


const postFetch = async (url, body) => {
    const res = await fetch(`http://localhost:8000/api${url}`, {
        method: 'POST',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = await res.json()
    return data

}

export { getFetch, postFetch }

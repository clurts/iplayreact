import { useState, useEffect } from 'react';

export function useSpotifyApi(url, mytoken) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchToJSON = async () => {
            try {
                const res = await fetch(url, {
                    headers: { "Authorization": mytoken }
                })
                const data = await res.json()
                setData(data)

            } catch (error) {
                setError(error)
            }
        };
        fetchToJSON()
    }, [])
    return { data, error }

}
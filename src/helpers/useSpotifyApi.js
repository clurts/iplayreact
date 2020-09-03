import { useState, useEffect } from 'react';

export function useSpotifyApi(url, mytoken) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchToJSON = async () => {
            setLoading(true)
            try {
                const res = await fetch(url, {
                    headers: { "Authorization": mytoken }
                })
                const data = await res.json()
                setLoading(false)
                setData(data)

            } catch (error) {
                setError(error)
            }
        };
        fetchToJSON()
    }, [])
    return { data, error, loading }

}
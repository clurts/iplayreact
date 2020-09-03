import React, { useState, useEffect } from 'react';
import { Link } from "@reach/router"
import { fetchToJSON } from '../../helpers/helpers'
import './playlist.scss'

export default function Featured({ mytoken }) {
    const [loading, setLoading] = useState(true);
    const [tracks, setTracks] = useState([]);
    const [urlparam, setUrlparam] = useState(null)

    useEffect(function () {
        let searchParams = new URLSearchParams(document.location.search);
        setUrlparam(searchParams.get('id'));

    })
    console.log(urlparam)
    useEffect(function () {
        const url = "https://api.spotify.com/v1/playlists/" + urlparam + "/tracks";

        fetchToJSON(url, mytoken)
            .then(data => {
                console.log(data)
                setLoading(false);
                setTracks(data.playlists.items);
            });

    }, []);

    return (
        <h1>playlist</h1>
    );
}
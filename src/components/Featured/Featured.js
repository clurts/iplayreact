import React, { useState } from 'react';
import { Link } from "@reach/router"
import { useSpotifyApi } from '../../helpers/useSpotifyApi'
import { fetchToJSON } from '../../helpers/helpers'
import './Featured.scss'

export default function Featured({ mytoken }) {
    const url = "https://api.spotify.com/v1/browse/featured-playlists";

    const [playlists, setPlaylists] = useState([])
    const { data, error, loading } = useSpotifyApi(url, mytoken)

    console.log(data)
    //if (error) console.log(error);

    //setPlaylists(data.playlists.items)
    //console.log(playlists)
    return (<p>test</p>)

    /*return (
        <React.Fragment>
            {loading ? <p>... loading...</p> :
                <ul className="featured__list">
                    {playlists.map(playlist => (
                        <li key={playlist.id} className="featured__listItem">
                            <Link to={'/playlist/?id=' + playlist.id}>
                                <img src={playlist.images[0].url} alt="test" className="featured__image" />
                            </Link>
                        </li>
                    ))}
                </ul>
            }
        </React.Fragment>
    );*/
}
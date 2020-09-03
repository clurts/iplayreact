import React, { useState, useEffect } from 'react';
import Featured from '../Featured/Featured';
import Playlist from '../Playlist/Playlist';
import { getToken, createToken } from '../../helpers/helpers'
import { Router } from '@reach/router';

export default function Main() {
    const [token, setToken] = useState(null)

    useEffect(function () {
        getToken()
            .then(recievedToken => setToken(recievedToken))
    }, []);


    return (
        <main>
            <h1>Adopt Me!</h1>
            {!token ? <p>You do not have an access token...</p> :
                <Router>
                    <Featured mytoken={token} path="/" />
                    <Playlist mytoken={token} path="playlist" />
                </Router>
            }

        </main>
    );
};

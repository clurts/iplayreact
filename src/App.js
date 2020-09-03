import React from 'react';
import { render } from 'react-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

const App = () => {
    return (
        <React.Fragment>
            <Header pagename="playlists" />
            <Main />
            <Footer />
        </React.Fragment>
    )
}

render(<App />, document.querySelector('.app'));
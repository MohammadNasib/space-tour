import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/global.scss';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import '../assets/home/background-home-mobile.jpg';
import Radium from 'radium';

function SpaceTourism() {
    const pathName = window.location.pathname;
    const [name, setName] = useState(pathName === '/' ? 'home' : pathName.slice(1));

    const styles = {
        background: ` url('../assets/${name}/background-${name}-mobile.jpg') 
        center center / 100% 100% no-repeat `,

        '@media (min-width: 640px)': {
            background: ` url('../assets/${name}/background-${name}-tablet.jpg') center center / 100% 100% no-repeat `,
        },

        '@media (min-width:950px)': {
            background: ` url('../assets/${name}/background-${name}-desktop.jpg') center center / 100% 100% no-repeat `,
        },
    };

    return (
        <div className='container' style={styles}>
            <Router>
                <Navbar setName={setName} />
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/destination' element={<Destination />} />

                    <Route path='/crew' element={<Crew />} />

                    <Route path='/technology' element={<Technology />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Radium(SpaceTourism);

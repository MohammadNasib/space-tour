import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/global.scss';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import '../assets/home/background-home-mobile.jpg';
import { AnimatePresence, motion } from 'framer-motion';

export default function SpaceTourism() {
    const pathName = window.location.pathname;
    // slice removes first character of a string
    const [bgName, setBgName] = useState(pathName === '/' ? 'home' : pathName.slice(1));
    const [imgType, setImgType] = useState('mobile');

    useEffect(() => {
        let screenSize = window.innerWidth;
        screenSize < '640' && setImgType('mobile');
        screenSize >= '640' && screenSize < '950' && setImgType('tablet');
        screenSize >= '950' && setImgType('desktop');

        window.addEventListener('resize', cngImgType);
    }, []);

    function cngImgType() {
        let screenSize = window.innerWidth;
        screenSize < '640' && setImgType('mobile');
        screenSize >= '640' && screenSize < '950' && setImgType('tablet');
        screenSize >= '950' && setImgType('desktop');
    }

    const styles = {
        background: ` url('../assets/${bgName}/background-${bgName}-${imgType}.jpg') 
        center center / 100% 100% no-repeat `,
    };

    return (
        <AnimatePresence>
            <motion.div
                className='container'
                style={styles}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
            >
                <Router>
                    <Navbar setBgName={setBgName} />
                    <Routes>
                        <Route exact path='/' element={<Home />} />

                        <Route path='/destination' element={<Destination />} />

                        <Route path='/crew' element={<Crew />} />

                        <Route path='/technology' element={<Technology />} />
                    </Routes>
                </Router>
            </motion.div>
        </AnimatePresence>
    );
}

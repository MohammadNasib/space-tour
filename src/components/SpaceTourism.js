import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/global.scss';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import '../assets/home/background-home-mobile.jpg';
import { AnimatePresence, motion } from 'framer-motion';

export default function SpaceTourism() {
    const location = useLocation();
    // slice removes first character of a string
    const [bgName, setBgName] = useState(
        location.pathname === '/' ? 'home' : location.pathname.slice(1)
    );
    const [imgType, setImgType] = useState('mobile');
    const commonVarients = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1 },
        },
        exit: { x: '-100vw', transition: { ease: 'easeInOut', delay: 0.2, duration: 0.5 } },
    };

    useEffect(() => {
        cngImgType();
        window.addEventListener('resize', cngImgType);
    }, []);

    function cngImgType() {
        let screenSize = window.innerWidth;
        screenSize < '640' && setImgType('mobile');
        screenSize >= '640' && screenSize < '950' && setImgType('tablet');
        screenSize >= '950' && setImgType('desktop');
    }

    const styles = {
        background: ` url('../../assets/${bgName}/background-${bgName}-${imgType}.jpg') 
        center center / 100% 100% no-repeat `,
    };

    return (
        <>
            <Navbar setBgName={setBgName} />

            <AnimatePresence exitBeforeEnter >
                <motion.div
                    className='container'
                    style={styles}
                    key={location.pathname}
                    variants={commonVarients}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    <Routes location={location} key={location.pathname}>
                        <Route exact path='/' element={<Home />} />

                        <Route path='/destination' element={<Destination />} />

                        <Route path='/crew' element={<Crew />} />

                        <Route path='/technology' element={<Technology />} />
                    </Routes>
                </motion.div>
            </AnimatePresence>
        </>
    );
}

import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import json from '../utilities/data.json';
import Footer from './Footer';
import SubMenu from './SubMenu';

export default function Content({ dataName, classes }) {
    const dataArray = json[dataName];
    const [index, setIndex] = useState(0);
    const [imgType, setImgType] = useState('');

    useEffect(() => {
        let screenSize = window.innerWidth;
        setImgType(screenSize >= '950' ? 'portrait' : 'landscape');

        window.addEventListener('resize', cngImgType);
    }, []);

    function cngImgType() {
        let screenSize = window.innerWidth;
        screenSize >= '950' ? setImgType('portrait') : setImgType('landscape');
    }

    return (
        <motion.div
            className={'content'}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
        >
            <div className={classes.image}>
                {/* <AnimatePresence exitBeforeEnter> */}
                <motion.img
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.15 }}
                    loading='lazy'
                    alt={dataArray[index].name}
                    src={dataArray?.[index].images.webp ?? dataArray?.[index].images[imgType]}
                />
                {/* </AnimatePresence> */}
            </div>

            <div className={`${classes.info} globalInfo txtAlign`}>
                <div className={` ${classes.subMenu}  leftPadding `}>
                    <SubMenu
                        dataArray={dataArray}
                        setIndex={setIndex}
                        dataName={dataName}
                        classes={classes}
                    />
                </div>

                <div className='details'>
                    {/* <AnimatePresence exitBeforeEnter> */}
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}
                        className={classes.name}
                    >
                        {dataArray[index].name}
                    </motion.div>
                    {/* </AnimatePresence> */}

                    {/* <AnimatePresence exitBeforeEnter> */}
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}
                        className={` ${classes.description} leftPadding `}
                    >
                        {dataArray[index].description}
                    </motion.div>
                    {/* </AnimatePresence> */}

                    <Footer
                        classes={classes}
                        pageName={dataName}
                        distance={dataArray[index].distance}
                        travel={dataArray[index].travel}
                        role={dataArray[index].role}
                    />
                </div>
            </div>
        </motion.div>
    );
}

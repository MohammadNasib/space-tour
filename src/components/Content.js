// import { motion } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import json from '../utilities/data.json';
import Footer from './Footer';
import SubMenu from './SubMenu';

export default function Content({ dataName, classes }) {
    const dataArray = json[dataName];
    const [index, setIndex] = useState(0);
    const [imgType, setImgType] = useState('');
    const commonVarients = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.5 },
        },
        exit: { opacity: 0, transition: { ease: 'easeInOut', delay: 0.1, duration: 0.7 } },
    };

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
        <div className={'content'}>
            <div className={classes.image}>
                <AnimatePresence exitBeforeEnter initial={false}>
                    <motion.img
                        className='img'
                        alt={dataArray[index].name}
                        src={dataArray?.[index].images.webp ?? dataArray?.[index].images[imgType]}
                        key={dataArray[index].name}
                        variants={commonVarients}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    />
                </AnimatePresence>
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

                <AnimatePresence exitBeforeEnter initial={false}>
                    <motion.div
                        className='details'
                        key={dataArray[index].name}
                        variants={commonVarients}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <div className={classes.name}>{dataArray[index].name}</div>

                        <div className={` ${classes.description} leftPadding `}>
                            {dataArray[index].description}
                        </div>

                        <Footer
                            classes={classes}
                            pageName={dataName}
                            distance={dataArray[index].distance}
                            travel={dataArray[index].travel}
                            role={dataArray[index].role}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import json from '../utilities/data.json';
import Footer from './Footer';
import SubMenu from './SubMenu';

export default function Content({ dataName, classes }) {
    const dataArray = json[dataName];
    const [index, setIndex] = useState(0);
    const [imgType, setImgType] = useState('');
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
        <motion.div
            className={'content'}
            variants={contentVariants}
            animate='visible'
            initial='hidden'
            // exit={{ opacity: 0, y: -20 }}
        >
            <div className={classes.image}>
                <motion.img
                    loading='lazy'
                    alt={dataArray[index].name}
                    src={dataArray?.[index].images.webp ?? dataArray?.[index].images[imgType]}
                />
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
                    <motion.div className={classes.name}>{dataArray[index].name}</motion.div>

                    <motion.div className={` ${classes.description} leftPadding `}>
                        {dataArray[index].description}
                    </motion.div>

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

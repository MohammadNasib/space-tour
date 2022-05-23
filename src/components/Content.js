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
        console.log('called');
        screenSize >= '950' ? setImgType('portrait') : setImgType('landscape');
    }

    return (
        <>
            <div className={'content'}>
                <div className={classes.image}>
                    <img
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
                    </div>
                </div>
            </div>
        </>
    );
}

import React, { useState } from 'react';
import json from '../utilities/data.json';
import Footer from './Footer';
import SubMenu from './SubMenu';

export default function Content({ dataName, classes }) {
    const dataArray = json[dataName];
    const [index, setIndex] = useState(0);

    return (
        <>
            <div className={'content'}>
                <div className={classes.image}>
                    <img
                        loading='lazy'
                        alt={dataArray[index].name}
                        src={dataArray?.[index].images.webp}
                    />
                </div>

                <div className={`info txtAlign`}>
                    <div className={` ${classes.subMenu}  leftPadding `}>
                        <SubMenu dataArray={dataArray} setIndex={setIndex} dataName={dataName} classes={classes} />
                    </div>

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
        </>
    );
}

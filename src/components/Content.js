import React, { useState } from 'react';
import Radium from 'radium';

import json from '../utilities/data.json';
// import '../styles/global.scss';

export default function Content({ dataName, classes }) {
    const dataArray = json[dataName];
    const [index, setInex] = useState(0);
    

    return (
        <>
            <div className={'content'}>
                <div className={classes.image}>
                    <img alt='MOON' src={dataArray[index].images.webp} />
                </div>

                <div className={`info txtAlign`}>
                    <div className={` ${classes.subMenu} leftPadding }`}>
                        <span className='pointer' onClick={() => setInex(0)}>
                            MOON
                        </span>
                        <span className='pointer' onClick={() => setInex(1)}>
                            MARS
                        </span>
                        <span className='pointer' onClick={() => setInex(2)}>
                            EUROPA
                        </span>
                        <span className='pointer' onClick={() => setInex(3)}>
                            TITAN
                        </span>
                    </div>

                    <div className={classes.name}>{dataArray[index].name}</div>

                    <div className={` ${classes.description} leftPadding `}>
                        {dataArray[index].description}
                    </div>
                </div>
            </div>
        </>
    );
}

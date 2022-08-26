import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/home.scss';

export default function Home({ updateBgName }) {
    return (
        <div className='content'>
            <div className='context txtAlign'>
                <h className='topHeading leftPadding'>So, you want to travel to</h>
                <p className='middleHeading'>SPACE</p>
                <p className='para leftPadding'>
                    Let's face it. if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we'll give you a truly out of this world experience!
                </p>
            </div>

            <div>
                <NavLink to='destination'>
                    <button className='pointer' onClick={() => updateBgName('destination')}>
                        Explore
                    </button>
                </NavLink>
            </div>
        </div>
    );
}

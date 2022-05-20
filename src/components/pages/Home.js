import React from 'react';
import '../../styles/home.scss';

export default function Home() {

    return (
        <div className='content'>
            <div className='context txtAlign'>
                <p className='top leftPadding'>So, you want to travel to</p>
                <p className='middle'>SPACE</p>
                <p className='bottom leftPadding'>
                    Let's face it. if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we'll give you a truly out of this world experience!
                </p>
            </div>
            
            <div className='button'>
                <button className='pointer'>EXPLORE</button>
            </div>
        </div>
    );
}

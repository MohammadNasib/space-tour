import React from 'react';
import Content from '../Content';
import Title from '../Title';
// import '../../styles/crew.scss';

export default function Crew() {
    return (
        <>
            <Title title='MEET YOUR CREW' />
            <div className='content'>
                <Content dataName={'crew'} />
            </div>
        </>
    );
}

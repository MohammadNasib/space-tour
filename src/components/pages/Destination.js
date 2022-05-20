import React from 'react';
import Title from '../Title';
import Content from '../Content';
import classes from '../../styles/destination.module.scss';
import  '../../styles/destination.scss';

export default function Destination() {
    return (
        <>
            <Title title='PICK YOUR DESTINATION' />

            <Content dataName={'destinations'} classes={classes} />

            {/* <div className='footer'>
                <div className='distance leftPadding'>
                    <h3 className='txtAlign'>AVG. DISTANCE</h3>
                    <h1>225 MIL. KM</h1>
                </div>
                <div className='travelTime'>
                    <h3 className='txtAlign'>EST. TRAVEL TIME</h3>
                    <h1>9 MONTHS</h1>
                </div>
            </div> */}
        </>
    );
}

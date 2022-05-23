import React from 'react';
import Title from '../Title';
import Content from '../Content';
import classes from '../../styles/modules/destination.module.scss';

export default function Destination() {
    return (
        <>
            <Title title='PICK YOUR DESTINATION' />

            <Content dataName={'destinations'} classes={classes}  />

        </>
    );
}

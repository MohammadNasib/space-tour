import React from 'react';
import Title from '../Title';
import Content from '../Content';
import classes from '../../styles/modules/technology.module.scss';

export default function Destination() {
    return (
        <>
            <Title title='SPACE LAUNCH 101' />
            <Content dataName={'technology'} classes={classes} />
        </>
    );
}

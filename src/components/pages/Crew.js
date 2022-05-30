import React from 'react';
import Content from '../Content';
import Title from '../Title';
import classes from '../../styles/modules/crew.module.scss';

export default function Crew() {
    return (
        <>
            <Title title='MEET YOUR CREW' />
            <Content dataName={'crew'} classes={classes} />
            </>
    );
}

import { motion } from 'framer-motion';
import React, { useState } from 'react';

export default function SubMenu({ dataArray, setIndex, dataName, classes }) {
    const [activeArray, setActiveArray] = useState(newArray());

    // this function creates an array off FALSE and adds a TRUE value  in the start
    function newArray() {
        const tempArray = new Array(dataArray.length - 1).fill(false);
        tempArray.unshift(true); // UNSHIFT adds value in the start
        return tempArray;
    }

    function toggleActive(index) {
        const updatedArray = new Array(dataArray.length).fill(false);
        updatedArray[index] = true;
        setActiveArray(updatedArray);
    }

    return (
        <>
            {dataArray.map((element, index) => (
                <motion.span
                    layout
                    className={` pointer ${activeArray[index] && classes.active} `}
                    key={index}
                    onClick={() => {
                        setIndex(index);
                        toggleActive(index);
                    }}
                >
                    {dataName === 'destinations' && element.name}
                    {dataName === 'crew' && null}
                    {dataName === 'technology' && index + 1}
                </motion.span>
            ))}
        </>
    );
}

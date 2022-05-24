import { motion } from 'framer-motion';
import React from 'react';

export default function Footer({ classes, pageName, distance, travel, role }) {
    return (
        <motion.div layout className={`${classes.footer} globalFooter `}>
            {pageName === 'destinations' && (
                <>
                    <div className={`${classes.distance} leftPadding`}>
                        <h3 className='txtAlign'>AVG. DISTANCE</h3>
                        <h1>{distance}</h1>
                    </div>

                    <div className={classes.travelTime}>
                        <h3 className='txtAlign'>EST. TRAVEL TIME</h3>
                        <h1>{travel}</h1>
                    </div>
                </>
            )}

            {pageName === 'crew' && <> {role} </>}
            {pageName === 'technology' && <>THE TERMINOLOGY</>}
        </motion.div>
    );
}

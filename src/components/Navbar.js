import React, { useRef } from 'react';
import '../styles/navbar.scss';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar({ updateBgName }) {
    const menuRef = useRef();
    function openMenu() {
        menuRef.current.classList.toggle('openMenu');
    }

    return (
        <>
            <div className='header'>
                <NavLink to='/' onClick={() => updateBgName('home')} className='logo pointer'>
                    <img src='assets/shared/logo.svg' alt='LOGO' />
                </NavLink>

                <span className='menuIcon pointer'>
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        src='assets/shared/icon-hamburger.svg'
                        alt='Menu'
                        onClick={openMenu}
                    />
                </span>

                <nav className='menu' ref={menuRef}>
                    <div className='closeIcon pointer'>
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            src='assets/shared/icon-close.svg'
                            alt='CLOSE'
                            onClick={openMenu}
                        />
                    </div>

                    <ul>
                        <li>
                            <NavLink to='/' onClick={() => updateBgName('home')}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='destination' onClick={() => updateBgName('destination')}>
                                Destination
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='crew' onClick={() => updateBgName('crew')}>
                                Crew
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='technology' onClick={() => updateBgName('technology')}>
                                Technology
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

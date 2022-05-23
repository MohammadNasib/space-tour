import React, { useRef } from 'react';
import '../styles/navbar.scss';
import { NavLink } from 'react-router-dom';

export default function Navbar({ setBgName }) {
    const menuRef = useRef();

    function openMenu() {
        menuRef.current.style.left = '0';
    }

    function closeMenu() {
        menuRef.current.style.left = '-80%';
    }

    function updateBgName(name) {
        setBgName((preVal) => (preVal = name));
    }


    return (
        <>
            <div className='header'>
                <span className='logo pointer'>
                    <img src='assets/shared/logo.svg' alt='LOGO'  />
                </span>
                
                <span className='menuIcon pointer'>
                    <img
                        src='assets/shared/icon-hamburger.svg'
                        alt='HAMBURGER'
                        onClick={openMenu}
                    
                    />
                </span>

                <nav className='menu' ref={menuRef}>
                    <ul>
                        <div className='closeIcon pointer'>
                            <img
                                src='assets/shared/icon-close.svg'
                                alt='CLOSE'
                                onClick={closeMenu}
                            />
                        </div>

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

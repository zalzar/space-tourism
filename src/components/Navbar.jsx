import React, { useState, useEffect, useRef } from 'react';
import astronautImage from '../assets/Astronaut.webp';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="w-full p-4 flex justify-end items-center">
                <div className="flex items-center">
                    <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <img className="w-10 h-10 rounded-full border border-white ml-4" src={astronautImage} alt="User" />
                </div>
            </nav>

            <div
                ref={menuRef}
                className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-64 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
            >
                <button onClick={toggleMenu} className="p-4">
                    Close
                </button>
                <ul className="p-4">
                    <li className="mb-4"><a href="#">Home</a></li>
                    <li className="mb-4"><a href="#">About</a></li>
                    <li className="mb-4"><a href="#">Services</a></li>
                    <li className="mb-4"><a href="#">Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;

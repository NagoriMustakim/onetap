import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './component.css'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = (e) => {
        if (e.target.closest('.dropdown')) return;
        setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <main className='main'>
            <Link to={'/'} className='logo center'>WARPVPN</Link>
            <div className='d-flex flex-row'>
                <Link to={'/families'} className='text-end'><p className='families-txt'>Families</p></Link>
                <div className='drp'>
                    <button className="dropdown-btn" onClick={toggleDropdown}>
                        <div className="dropdown">
                            <span className="dropdown-label">English</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                fill="currentColor"
                                className="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                />
                            </svg>
                            {isOpen && (
                                <div className="dropdown-content">
                                    <a href="/">Bahasa Indonesia</a>
                                    <a href="/">Deutsch</a>
                                    <a href="/">Español</a>
                                    <a href="/">Français</a>
                                    <a href="/">Italiano</a>
                                    <a href="/">Nederlands</a>
                                    <a href="/">Polski</a>
                                    <a href="/">Português</a>
                                    <a href="/">Türkçe</a>
                                    <a href="/">العربية</a>
                                    <a href="/">فارسی</a>
                                    <a href="/">עברית</a>
                                    <a href="/">日本語</a>
                                    <a href="/">한국어</a>
                                    <a href="/">Русский</a>
                                    <a href="/">Українська</a>
                                    <a href="/">简体中文</a>
                                    <a href="/">繁體中文</a>
                                </div>
                            )}
                        </div>
                    </button>
                </div>
            </div>
        </main >
    )
}

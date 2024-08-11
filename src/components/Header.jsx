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
        <main className='main mt-4'>
            <Link to={'/'} className='logo center'>WARPVPN</Link>
            <div className='d-flex flex-row'>
                <Link to={'/families'} className='text-end'><p className='families-txt'>Families</p></Link>
                <div className='drp'>
                    <button className="dropdown-btn" onClick={toggleDropdown}>
                       
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe mt-1" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                        </svg>

                        <div className="dropdown">
                            <span className="dropdown-label">English</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
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

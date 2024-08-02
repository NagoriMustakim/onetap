import React from 'react'
import { Link } from "react-router-dom";
import './component.css'

export const Header = () => {
    return (
        <main className='main mt-4'>
            <Link to={'/'} className='logo center'>WARPVPN</Link>
            <Link to={'/families'} className='center'><p className='families-txt'>Families</p></Link>
        </main>
    )
}

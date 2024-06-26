import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
const Navigation = () => {
    return (

        <nav className={s.nav}>
            <ul className={s.navList}>
                <li className={s.navItem}><NavLink to="/" className={s.navLink}>
                    Home
                </NavLink></li>
                <li className={s.navItem}><NavLink to="/movies" className={s.navLink}>
                    Movies
                </NavLink></li>
            </ul>
        </nav>

    )
}
export default Navigation;
import { Link, NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';
import styles from './Navigation.module.css';

export const MainNavigation = () => {
    return (
        <Navigation>
            <li><Link to="/">Home</Link></li>
            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'blue' : 'white' })} to="/about">About</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ""} to="/characters">Characters</NavLink></li>
        </Navigation>
    )
}
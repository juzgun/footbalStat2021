import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Header.module.css"


const Header = (props) => {
    return (
        <div>
            <header className={classes.header}>
                <div className={classes.title}>
                    SoccerStat
                </div>
                <div className={classes.homeButton}>
                    <NavLink to='/'>
                        <button>Home</button>
                    </NavLink>
                </div>
            </header>
        </div>
    );
}

export default Header;
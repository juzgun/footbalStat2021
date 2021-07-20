import React from 'react';
import classes from "./Header.module.css"


const Header = (props) => {
    return (
        <div>
            <header className={classes.header}>
                SoccerStat
            </header>
        </div>
    );
}

export default Header;
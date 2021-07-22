import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Sidebar.module.css"

const Sidebar = (props) => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebarItem}>
                <NavLink to="/leagues" activeClassName={classes.activeLink}>Список Лиг</NavLink>
            </div>
            <div className={classes.sidebarItem}>
                <NavLink to="/commandDates" activeClassName={classes.activeLink}>Календарь команды</NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
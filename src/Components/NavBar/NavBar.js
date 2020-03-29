import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = (props) => {

    let friendsElements = props.navBar.friends.map ( f => <Friends text = {f.name}/> )
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}> Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}> Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}> Settings</NavLink>
            </div>
            <div className={s.friends}>
                <h2>Friends</h2>
                <div className={s.friendsWrapper}>
                 {friendsElements}
                </div>
            </div>





        </nav>
    )
}

export default NavBar;
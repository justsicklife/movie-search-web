import "./Navbar.css";
import { NavLink } from "react-router-dom";
import React from "react";
import BookmarkTag from "../api/bookmarkTag/BookmarkTag.js"

const Navbar = () => {
    return (
        <>
            <header className="header_navbar">
                <nav className="navbar_table">
                    <NavLink
                        className="navbar_cell"
                        activeClassName="active"
                        exact
                        to="/"
                    >
                        박스오피스 검색
            </NavLink>
                    <NavLink
                        className="navbar_cell"
                        activeClassName="active"
                        to="/movielist"
                        exact
                    >
                        영화검색
            </NavLink>
                    <NavLink
                        className="navbar_cell"
                        activeClassName="active"
                        to="/companys"
                        exact
                    >
                        영화사 검색
            </NavLink>
                    <NavLink
                        className="navbar_cell"
                        activeClassName="active"
                        to="/peoplelist"
                        exact
                    >
                        영화인 검색
                </NavLink>
                </nav>
            </header>
            <BookmarkTag />
        </>
    )
}

export default React.memo(Navbar);
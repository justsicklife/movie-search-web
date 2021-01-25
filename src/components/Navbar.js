import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar_table">
                <NavLink
                    className="navbar_cell"
                    activeClassName="active"
                    exact
                    to="/boxoffice"
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
    )
}

export default Navbar;
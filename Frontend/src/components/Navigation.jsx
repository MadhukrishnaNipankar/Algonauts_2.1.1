import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { LoginContext } from '../context/LoginContext.js';

const Navigation = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
    const logout = () => {
        sessionStorage.clear();
        setIsLoggedIn(false)
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: "sticky", top: "0", zIndex: "1" }}>
            <div className="container">
                <Link to="/" style={{textDecoration:"none"}}>
                    <a className="navbar-brand">BizReady</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to=""
                                className={({ isActive }) =>
                                    `${isActive ? "active-nav" : null} nav-link`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `${isActive ? "active-nav" : null} nav-link`
                                }
                            >
                                About Us
                            </NavLink>
                        </li>

                        <li className="nav-item">
                                    <NavLink
                                        to="/Blog"
                                        className={({ isActive }) =>
                                            `${isActive ? "active-nav" : null} nav-link`
                                        }
                                    >
                                       Blog
                                    </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `${isActive ? "active-nav" : null} nav-link`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                        {

                            !isLoggedIn &&
                            <li className="nav-item">
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        `${isActive ? "active-nav" : null} nav-link`
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                        }

                        {
                            isLoggedIn &&
                            <>

                                <li className="nav-item">
                                    <NavLink
                                        to="/profile-details"
                                        className={({ isActive }) =>
                                            `${isActive ? "active-nav" : null} nav-link`
                                        }
                                    >
                                        Profile
                                    </NavLink>
                                </li>

                               

                                <li className="nav-item">
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) =>
                                            `${isActive ? "active-nav" : null} nav-link`
                                        }
                                        onClick={logout}
                                    >
                                        Logout
                                    </NavLink>
                                </li>

                            </>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

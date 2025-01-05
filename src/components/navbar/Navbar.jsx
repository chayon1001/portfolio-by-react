import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-500 font-bold"
                            : "text-white hover:text-orange-400"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-500 font-bold"
                            : "text-white hover:text-orange-400"
                    }
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/skills"
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-500 font-bold"
                            : "text-white hover:text-orange-400"
                    }
                >
                    Skills
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-500 font-bold"
                            : "text-white hover:text-orange-400"
                    }
                >
                    Projects
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-500 font-bold"
                            : "text-white hover:text-orange-400"
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl">Portfolio.</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-10 items-center justify-center text-xl ">{links}</ul>
            </div>
            <div className="navbar-end">
                <a className="px-6 py-3 rounded-full bg-gradient-to-r from-[#dd2476] to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transform duration-300">
                    Download CV
                </a>
            </div>
        </div>
    );
};

export default Navbar;

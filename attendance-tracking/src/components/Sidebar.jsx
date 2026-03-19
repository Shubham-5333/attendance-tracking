import React, { useState } from 'react'
import '../assets/styles/sidebar.css'
import novox from '../assets/image/novox-logo.png'
import { RiDashboardLine, RiTeamLine,RiGraduationCapLine } from 'react-icons/ri'
// import { LuClock3 } from "react-icons/lu";
import { GoProject } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [active, setActive] = useState("")

    return (
        <div className='sidebar'>

            <div>
                <img className='novox-logo' src={novox} alt="logo" />

                <ul className='menu'>

                    <li
                        className={active === "dashboard" ? "active" : ""}
                        onClick={() => setActive("dashboard")}
                    >
                        <Link to="/dashboard" className="menu-link">
                            <RiDashboardLine size={20} />
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li
                        className={active === "employees" ? "active" : ""}
                        onClick={() => setActive("employees")}
                    >
                        <Link to="/employees" className="menu-link">
                        <RiTeamLine size={20} />
                        <span>Employees</span>
                        </Link>
                    </li>
                    <li
                        className={active === "students" ? "active" : ""}
                        onClick={() => setActive("students")}
                    >
                        <Link to="/students" className="menu-link">
                            < RiGraduationCapLine size={20} />
                            <span>Students</span>
                        </Link>

                    </li>

                    <li
                        className={active === "projects" ? "active" : ""}
                        onClick={() => setActive("projects")}
                    >
                        <GoProject size={20} />
                        <span>Projects</span>
                    </li>

                    <li
                        className={active === "settings" ? "active" : ""}
                        onClick={() => setActive("settings")}
                    >
                        <IoSettingsOutline size={20} />
                        <span>Settings</span>
                    </li>

                </ul>
            </div>

            <div className='logout'>
                <button>
                    <FiLogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>

        </div>
    )
}

export default Sidebar
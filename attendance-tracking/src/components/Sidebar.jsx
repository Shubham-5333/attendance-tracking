import React, { useState } from 'react'
import '../assets/styles/sidebar.css'
import novox from '../assets/image/novox-logo.png'
import { RiDashboardLine, RiTeamLine } from 'react-icons/ri'
import { LuClock3 } from "react-icons/lu";
import { GoProject } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

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
                        <RiDashboardLine size={20} />
                        <span>Dashboard</span>
                    </li>

                    <li
                        className={active === "timelog" ? "active" : ""}
                        onClick={() => setActive("timelog")}
                    >
                        <LuClock3 size={20} />
                        <span>Time Log</span>
                    </li>
                    <li
                        className={active === "students" ? "active" : ""}
                        onClick={() => setActive("students")}
                    >
                        <RiTeamLine size={20} />
                        <span>Students</span>
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
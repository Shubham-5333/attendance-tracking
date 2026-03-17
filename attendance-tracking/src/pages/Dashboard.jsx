import React, { useState } from 'react';
import '../assets/styles/dashboard.css';
import { FaUserGraduate, FaHourglassHalf } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdChecklist } from "react-icons/md";

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const stats = [
        { title: "Active Students", value: 120, icon: <FaUserGraduate />, change: "+2.5%" },
        { title: "Avg. Coding Time", value: "6.5h", icon: <FiClock />, change: "+1.2%" },
        { title: "Today's Attendance", value: "85%", icon: <MdChecklist />, change: "-0.5%" },
        { title: "Pending Requests", value: 7, icon: <FaHourglassHalf />, change: "+3%" },
    ];

    const students = [
        {
            name: "John Doe",
            role: "Full Stack Dev",
            status: "Present",
            inTime: "09:00 AM",
            outTime: "05:30 PM",
            request: "None",
            action: "View"
        },
        {
            name: "Jane Smith",
            role: "UI/UX Designer",
            status: "Late",
            inTime: "10:15 AM",
            outTime: "--",
            request: "Late Request",
            action: "View"
        },
        {
            name: "Robert Brown",
            role: "Data Science",
            status: "Leave",
            inTime: "--",
            outTime: "--",
            request: "Sick Leave",
            action: "Review"
        },
        {
            name: "Emily Davis",
            role: "DevOps Engineer",
            status: "Late",
            inTime: "09:10 AM",
            outTime: "01:00 PM",
            request: "None",
            action: "View"
        },
        {
            name: "Richard gomez",
            role: "Mern Stack Developer",
            status: "Late",
            inTime: "09:10 AM",
            outTime: "01:00 PM",
            request: "None",
            action: "View"
        }
    ];

    // ✅ Pagination Logic
    const rowsPerPage = 4;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;

    const currentStudents = students.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(students.length / rowsPerPage);

    return (
        <div className="dashboard">

            {/* Cards */}
            <div className="cards-container">
                {stats.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="card-top">
                            <div className="icon-box">{item.icon}</div>
                            <span className="badge">{item.change}</span>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="table-container">
                <div className="table-header">
                    <div>
                        <h2>Student Time Logs</h2>
                        <p>Real-time institute activity and attendance tracking</p>
                    </div>
                    <button className="download-btn">Download CSV</button>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Time Log</th>
                                <th>Request</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentStudents.map((student, index) => (
                                <tr key={index}>
                                    <td data-label="Name">
                                        <div className="user-info">
                                            <div className="avatar">{student.name.charAt(0)}</div>
                                            <div>
                                                <strong>{student.name}</strong>
                                                <p>{student.role}</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td data-label="Status">
                                        <span className={`status ${student.status.toLowerCase()}`}>
                                            {student.status}
                                        </span>
                                    </td>

                                    <td data-label="Time Log">
                                        <div className="time-log">
                                            <span><strong>In:</strong> {student.inTime}</span>
                                            <span><strong>Out:</strong> {student.outTime}</span>
                                        </div>
                                    </td>

                                    <td data-label="Request">
                                        <span className={`request ${student.request.toLowerCase().replace(" ", "-")}`}>
                                            {student.request}
                                        </span>
                                    </td>

                                    <td data-label="Action">
                                        <button className="action-btn">
                                            {student.action}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ✅ Simple Pagination */}
                <div className="pagination">

                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        ◀
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            className={currentPage === i + 1 ? "active" : ""}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        ▶
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Dashboard;
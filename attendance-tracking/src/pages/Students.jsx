import React from "react";
import "../assets/styles/students.css";

const studentsData = [
  { name: "John Doe", id: "STU-001", role: "Web Dev", status: "active" },
  { name: "Jane Smith", id: "STU-002", role: "Python", status: "active" },
  { name: "Robert Brown", id: "STU-003", role: "UI/UX Design", status: "inactive" },
  { name: "Emily Davis", id: "STU-004", role: "Web Dev", status: "active" },
  { name: "Michael Chen", id: "STU-005", role: "Data Science", status: "active" },
  { name: "Sarah Wilson", id: "STU-006", role: "Web Dev", status: "active" },
  { name: "David Miller", id: "STU-007", role: "UI/UX Design", status: "active" },
  { name: "Lisa Thompson", id: "STU-008", role: "Python", status: "inactive" },
];

const Students = () => {
  return (
    <div className="students">

      {/* HEADER */}
      <div className="students-header">
        <div>
          <h2>STUDENT LIST</h2>
          <p>Over 1,240 students enrolled across all programs</p>
        </div>

        <div className="students-actions">
          <button className="export">Export CSV</button>
          <button className="add">Add Student</button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="students-filters">
  <div className="search-box">
    <input type="text" placeholder="Search by ID, Name, Class" />
  </div>

  <select>
    <option>All Classes</option>
  </select>

  <select>
    <option>All Status</option>
  </select>
</div>
      {/* GRID */}
      <div className="students-grid">
        {studentsData.map((student, index) => (
          <div className="students-card" key={index}>

            <div className={`status ${student.status}`}>
              {student.status}
            </div>

            <div className="avatar"></div>

            <h3 style={{fontSize:'16px'}}>{student.name}</h3>
            <p style={{fontSize:'12px',color:'#5E758D'}} className="id">#{student.id}</p>

            <span className="badge">{student.role}</span>

            <p className="phone">📞 +1 234 567 890</p>

            <div className="card-actions">
              < button style={{backgroundColor:'white',border:'transparent',cursor:'pointer'}}>👁️</ button>
              < button style={{backgroundColor:'white',border:'transparent',cursor:'pointer'}}>✏️</ button>
              < button style={{backgroundColor:'white',border:'transparent',cursor:'pointer'}}>🗑️</ button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Students;
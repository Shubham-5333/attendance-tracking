  import React, { useState } from 'react';
  import '../assets/styles/employees.css';
  // import 'bootstrap/dist/css/bootstrap.min.css';  
  import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  import Modal from 'react-bootstrap/Modal';

  const Employees = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const employees = [
      {
        id: "#NVX-101",
        name: "John Smith",
        role: "Teacher",
        department: "Academics",
        phone: "+91 98765 43210",
        hireDate: "15 Mar 2022",
        salary: "₹75,000",
        status: "Active"
      },
      {
        id: "#NVX-102",
        name: "Sarah Jenkins",
        role: "Admin",
        department: "Operations",
        phone: "+91 98765 43211",
        hireDate: "02 Nov 2021",
        salary: "₹68,000",
        status: "Active"
      },
      {
        id: "#NVX-103",
        name: "Michael Chen",
        role: "Teacher",
        department: "Academics",
        phone: "+91 98765 43212",
        hireDate: "20 Jan 2023",
        salary: "₹55,000",
        status: "Inactive"
      },
      {
        id: "#NVX-104",
        name: "Emily Davis",
        role: "Admin",
        department: "Content",
        phone: "+91 98765 43213",
        hireDate: "10 Jun 2022",
        salary: "₹62,000",
        status: "Active"
      }
    ];

    const rowsPerPage = 3;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;

    const currentEmployees = employees.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(employees.length / rowsPerPage);

    return (
      <div>

        {/* HEADER */}
        <div className="employees-header">
          <div className="header-left">
            <h1>Employee Directory</h1>
            <p>Manage and monitor all staff members across the institution.</p>
          </div>

          <div className="header-right">
            <button className="export-btn">Export Excel</button>
            <Button onClick={handleShow} className="add-btn">+ Add Employee</Button>
            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
          </div>
        </div>

        {/* FILTERS */}
        <div className="filters">
          {/* <span className="filter-tag">Dept: Academics ✕</span> */}

          <select>
            <option>Role: All</option>
          </select>

          <select>
            <option>Status: Active</option>
          </select>

          <button className="clear-btn">Clear All</button>
        </div>

        {/* TABLE */}
        <div className="employees-table-container">

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Employee</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Phone</th>
                  <th>Hire Date</th>
                  <th>Salary</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentEmployees.map((emp, index) => (
                  <tr key={index}>

                    <td data-label="ID">{emp.id}</td>

                    <td data-label="Employee">
                      <div className="user-info">
                        <div className="avatar">{emp.name.charAt(0)}</div>
                        <strong>{emp.name}</strong>
                      </div>
                    </td>

                    <td data-label="Role">
                      <span className={`role ${emp.role.toLowerCase()}`}>
                        {emp.role}
                      </span>
                    </td>

                    <td data-label="Department">{emp.department}</td>

                    <td data-label="Phone">{emp.phone}</td>

                    <td data-label="Hire Date">{emp.hireDate}</td>

                    <td data-label="Salary">{emp.salary}</td>

                    <td data-label="Status">
                      <span className={`status ${emp.status.toLowerCase()}`}>
                        ● {emp.status}
                      </span>
                    </td>

                    <td data-label="Actions">
                      <button className="action-btn">⋮</button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
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

  export default Employees;
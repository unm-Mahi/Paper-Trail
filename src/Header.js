import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");

  const handleLogin = () => {
    navigate("/Origins");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <header style={styles.header}>
      {/* Logo Section */}
      <div style={styles.logo}>
        <span style={{ color: "rgba(54, 78, 124, 1)" }}>
          <img src="/tools.png" alt="icon" 
          style={{ width: "1.2em", height: "1.2em", verticalAlign: "middle", marginRight: "8px" }}/>Paper</span> Trails
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul style={styles.navLinks}>
          <li>
            <NavLink to="/Origins" style={styles.link} className={({ isActive }) => isActive ? "active" : ""}>
              Origins
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={styles.link} className={({ isActive }) => isActive ? "active" : ""}>
              Behind Lines
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/Adduser" style={styles.link} className={({ isActive }) => isActive ? "active" : ""}>
              Add New User
            </NavLink>
          </li>*/}
          <li>
            <NavLink to="/Traces" style={styles.link} className={({ isActive }) => isActive ? "active" : ""}>
              Traces
            </NavLink>
          </li>
          <li>
            <NavLink to="/Reachus" style={styles.link} className={({ isActive }) => isActive ? "active" : ""}>
              Reach Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/" style={styles.link} className={({ isActive }) => isActive ? "active" : ""}>
              Welcome {user? user["name"] : "Guest"}
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Right Button */}
      {user ? (<button style={styles.button} onClick={handleLogout}>Logout</button>
      ) : (
        <button style={styles.button} onClick={handleLogin}>Login</button>
      )}
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#222",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "rgba(168, 186, 238, 1)",
    border: "none",
    padding: "8px 15px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

// Add active link style in index.css or App.css
// .active {
//   color: #00ffcc !important;
//   font-weight: bold;
//   border-bottom: 2px solid #00ffcc;
//   padding-bottom: 3px;
// }

export default Header;
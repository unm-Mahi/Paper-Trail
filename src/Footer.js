import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <h3>Paper Trails</h3>
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/Origins" style={styles.link}>Origins</a></li>
            <li><a href="/about" style={styles.link}>Behind Lines</a></li>
            {/*<li><a href="/Adduser" style={styles.link}>Add User</a></li>*/}
            <li><a href="/Traces" style={styles.link}>Traces</a></li>
            <li><a href="/Reachus" style={styles.link}>Reach Us</a></li>
            <li><a href="/Getuserdata" style={styles.link}>All User</a></li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul style={styles.list}>
            <li><a href="#" style={styles.link}>Facebook</a></li>
            <li><a href="#" style={styles.link}>Instagram</a></li>
            <li><a href="#" style={styles.link}>Linkedin</a></li>
            <li><a href="#" style={styles.link}>Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "30px 0",
    marginTop: "40px",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexWrap: "wrap",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    color: "#ccc",
    textDecoration: "none",
    display: "block",
    marginBottom: "5px",
  },
};

export default Footer;
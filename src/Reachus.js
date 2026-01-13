import React, { useState } from "react";

const API_BASE = "http://localhost:3000/users";

function Reachus() {
  const [formData, setFormData] = useState({
    photoFile: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photoFile: files[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        alert("Please login first!");
        return;
      }

      // ✅ Validation: Allow either photo or message or both
      if (!formData.photoFile && !formData.message.trim()) {
        alert("Please upload a photo or enter a description (at least one required).");
        return;
      }

      const loggedUser = JSON.parse(storedUser);
      const res = await fetch(`${API_BASE}/${loggedUser.id}`);
      if (!res.ok) {
        alert("User not found in database!");
        return;
      }

      const existingUser = await res.json();

      // ✅ If no image uploaded, store null or keep previous
      const imageName = formData.photoFile ? formData.photoFile.name : existingUser.photo || null;

      const updatedUser = {
        ...existingUser,
        photo: imageName,
        description: formData.message || existingUser.description || "",
      };

      const updateRes = await fetch(`${API_BASE}/${existingUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });

      if (!updateRes.ok) throw new Error("Failed to update user data.");

      const newUser = await updateRes.json();
      localStorage.setItem("user", JSON.stringify(newUser));

      alert("✅ Your sketch request has been uploaded successfully!");
      setFormData({ photoFile: null, message: "" });
    } catch (err) {
      console.error(err);
      alert("⚠️ Error uploading data! Please check console.");
    }
  };

  return (
    <div style={{ backgroundColor: "rgba(158, 185, 234, 0.21)", padding: "0", margin: "0" }}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Manifest - Reach Us</h1>
        <div style={styles.content}>
          {/* Contact Form */}
          <form style={styles.form} onSubmit={handleSubmit}>
            <h3 style={{ color: "rgba(8, 19, 41, 1)", fontWeight: "500" }}>
              Upload your photo (in png) &nbsp;
              <input
                type="file"
                name="photo"
                onChange={handleChange}
                style={styles.input}
              />
            </h3>

            <h3 style={{ color: "rgba(8, 19, 41, 1)", fontWeight: "500" }}>Give description</h3>
            <textarea
              name="message"
              placeholder="Your Sketch Message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
            ></textarea>

            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div style={styles.info}>
            <h3>📍 Address</h3>
            <p>C-4/8, Aman Enclave, Panki, Kanpur, Uttar Pradesh, India</p>
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
            <h3>📧 Email</h3>
            <p>papertrails@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "30px",
    color: "rgba(3, 16, 41, 1)",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
  },
  form: {
    flex: "1 1 400px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "120px",
    resize: "vertical",
  },
  button: {
    backgroundColor: "rgba(9, 25, 54, 1)",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  info: {
    flex: "1 1 300px",
    backgroundColor: "#f8f8f8",
    padding: "20px",
    borderRadius: "5px",
  },
};

export default Reachus;

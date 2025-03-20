import React, { useState } from "react";
import axios from "axios";

function AddUser() {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/user/add-user", formData);
            console.log(res.data);
            alert("User added successfully!");
            setFormData({ userName: "", email: "", password: "" }); // Reset form
        } catch (err) {
            console.error("Error adding user", err.message);
            alert("Failed to add user!");
        }
    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">
                    Username:
                    <input
                        type="text"
                        id="userName"
                        placeholder="Enter the username"
                        value={formData.userName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter the email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter the password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddUser;

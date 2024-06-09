import React, { useState } from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'

const LoginMedcin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);
    const navigate =useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;
        let validationErrors = {};

        if (!formData.email) {
            isValid = false;
            validationErrors.email = "Email is required";
        }

        if (!formData.password) {
            isValid = false;
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            isValid = false;
            validationErrors.password = "Password must be at least 6 characters";
        }

        setErrors(validationErrors);
        setValid(isValid);

        if (isValid) {
            axios.get('http://localhost:3005/medcin')
                .then(result => {
                    let userFound = false;
                    result.data.forEach(user => {
                        if (user.email === formData.email) {
                            userFound = true;
                            if (user.password === formData.password) {
                                alert("Login successfully")
                                navigate("/admin/accueil");
                            } else {
                                validationErrors.password = "Wrong password";
                                setErrors(validationErrors);
                                setValid(false);
                            }
                        }
                    });
                    if (!userFound) {
                        validationErrors.email = "Wrong email";
                        setErrors(validationErrors);
                        setValid(false);
                    }
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="signup-form">
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <p>Please fill in this form to sign in!</p>
                <hr />
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                    />
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default LoginMedcin;
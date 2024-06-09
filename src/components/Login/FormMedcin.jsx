import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const FormMedcin = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: ''
    });
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;
        let validationErrors = {};

        if (!formData.fname) {
            isValid = false;
            validationErrors.fname = "First name is required";
        }

        if (!formData.lname) {
            isValid = false;
            validationErrors.lname = "Last name is required";
        }

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

        if (formData.cpassword !== formData.password) {
            isValid = false;
            validationErrors.cpassword = "Passwords do not match";
        }

        setErrors(validationErrors);
        setValid(isValid);

        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:3005/medcin', formData)
                .then(result => console.log(result))
                .catch(err => console.log(err));
                
        }
    };

    return (
        <div className="signup-form">

            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                {!valid && (
                    <span className="text-danger">
                        {errors.fname && <p>{errors.fname}</p>}
                        {errors.lname && <p>{errors.lname}</p>}
                        {errors.email && <p>{errors.email}</p>}
                        {errors.password && <p>{errors.password}</p>}
                        {errors.cpassword && <p>{errors.cpassword}</p>}
                    </span>
                )}
                <hr />
                <div className="form-group">
                    <div className="row">
                        <div className="col-xs-6">
                            <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="First Name"
                                onChange={(event) => setFormData({ ...formData, fname: event.target.value })}
                            />
                        </div>
                        <div className="col-xs-6">
                            <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Last Name"
                                onChange={(event) => setFormData({ ...formData, lname: event.target.value })}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        onChange={(event) => setFormData({ ...formData, cpassword: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label className="checkbox-inline">
                        <input type="checkbox" required /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
                    </label>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">Sign Up <Link to='/login11'>
                        </Link>
                        </button>
                </div>
            </form>
            
        </div>
    );
};

export default FormMedcin;
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};

        if (!values.name) {
            newErrors.name = 'Nama harus diisi';
        }

        if (!values.email) {
            newErrors.email = 'Email harus diisi';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            newErrors.email = 'Email tidak valid';
        }

        if (!values.password) {
            newErrors.password = 'Password harus diisi';
        } else if (values.password.length < 6) {
            newErrors.password = 'Password harus terdiri dari minimal 6 karakter';
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validasi form
        const validationErrors = validate();
        setErrors(validationErrors);

        // Cek jika ada error
        const hasErrors = Object.keys(validationErrors).length > 0;

        if (!hasErrors) {
            try {
                await axios.post('http://localhost:8085/signup', values);
                setValues({ name: '', email: '', password: '' }); // Reset form fields
                navigate('/login');
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-4 rounded w-25 shadow'>
                <h2 className='text-3xl sm:text-4xl font-semibold text-left mb-4 sm:mb-0'>Daftar Akun</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'><strong>Nama</strong></label>
                        <input
                            type="text"
                            placeholder='Masukkan Nama'
                            name='name'
                            className='form-control'
                            value={values.name}
                            onChange={handleInput}
                        />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder='Masukkan Email'
                            name='email'
                            className='form-control rounded-0'
                            value={values.email}
                            onChange={handleInput}
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='password'
                            placeholder='Masukkan Password'
                            name='password'
                            className='form-control rounded-0'
                            value={values.password}
                            onChange={handleInput}
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Daftar</button>

                    <p className='text-center mt-3'>
                        Sudah punya akun? <Link to='/login' className='inline-block hover:text-secondary relative group mr-2 cursor-pointer'> Login </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;

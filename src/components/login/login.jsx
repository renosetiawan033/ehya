import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // Menambahkan state loading
    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};

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
            setLoading(true); // Set state loading menjadi true
            try {
                const res = await axios.post('http://localhost:8085/login', values);
                if (res.data === "Success") {
                    setValues({ email: '', password: '' }); // Reset form fields
                    navigate('/');
                } else {
                    alert("Akun tidak ditemukan");
                }
            } catch (err) {
                console.error(err);
                alert("Terjadi kesalahan. Silakan coba lagi.");
            } finally {
                setLoading(false); // Set state loading menjadi false
            }
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2 className='mb-4 text-3xl sm:text-4xl font-semibold text-left sm:mb-0'>Login Akun</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input 
                            type='email' 
                            placeholder='Masukkan Email' 
                            name='email'
                            onChange={handleInput} 
                            value={values.email} 
                            className='form-control rounded-0' 
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input 
                            type='password' 
                            placeholder='Masukkan Password' 
                            name='password'
                            onChange={handleInput} 
                            value={values.password} 
                            className='form-control rounded-0' 
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div> 
                    <button 
                        type='submit' 
                        className='btn btn-success w-100 rounded-2'
                        disabled={loading} // Nonaktifkan tombol saat loading
                    >
                        {loading ? 'Memuat...' : 'Masuk'}
                    </button>
                    <p></p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Buat Akun</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;

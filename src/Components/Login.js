import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { login, psdReset } = useContext(authContext);

    const [mail, setMail] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {

        e.preventDefault();
        let form = e.target;
        let email = form.email.value;
        let password = form.password.value;

        console.log(email, password)

        login(email, password)
            .then(result => {

                const user = result.user
                toast('Login successul')
                console.log(user);
                setError('')
                form.reset();
                navigate('/profile')

            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })
    }

    const handleEmail = (e) => {

        const email = e.target.value;
        console.log(email)
        setMail(email);
    }

    const setupPsd = () => {

        psdReset(mail)
            .then(() => {

                toast('Password reset sent to your mail')
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center mb-3 font-bold">Lets Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={submitHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={handleEmail} name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link onClick={setupPsd} to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <p><small className='text-red-600'> {error}</small></p>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default Login;
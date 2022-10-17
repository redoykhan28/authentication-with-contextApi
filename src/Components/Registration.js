import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

    const { signUp, varification, displayUserName } = useContext(authContext)

    const [error, setError] = useState('')

    const submitHandler = (e) => {

        e.preventDefault();
        let form = e.target;
        let name = form.name.value
        let email = form.email.value;
        let password = form.password.value;

        console.log(name, email, password)

        //handle regular expression for password
        if (!/(?=.*[0-9])/.test(password)) {

            setError('Please use atleast a digit..');
            return;
        }

        if (!/(?=.*[!@#$%^&*])/.test(password)) {

            setError('Please use a special character')
            return;
        }

        if (password.length < 8) {

            setError('Please use password length atleast 8')
            return;
        }

        setError('');

        signUp(email, password)
            .then(result => {

                const user = result.user;
                console.log(user)
                emailVarify();
                form.reset();
                updateUserName(name)
            })

            .catch(err => {

                console.log(err);
                setError(err.message)
            })
    }

    const emailVarify = () => {

        varification()
            .then(() => {

                toast('A email varification link send to your mail. Please Varify')
            })
    }

    const updateUserName = (name) => {

        displayUserName(name)
            .then(() => {
                console.log('name updated:', name)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center mb-3 font-bold">Lets SignUp!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={submitHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="FullName" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <p><small className='text-red-600'>{error}</small></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
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

export default Registration;
import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const SignUp = () => {

    const { createUser } = use(AuthContext)
    console.log(createUser);

    const handleSignUp = e => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)

        const { email, password, ...restFormData } = Object.fromEntries(formData.entries())


        // Create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                const userProfile = {
                    email,
                    ...restFormData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime

                }

                console.log(email, password, userProfile);

                // Save profile info in database
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your account has been created",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }).catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign Up</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Photo URL</label>
                    <input type="text" name='photo' className="input" placeholder="Photo URL" />
                    <label className="label">Phone Number</label>
                    <input type="number" name='phone' className="input" placeholder="Phone Number" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a>Already have an account? <Link to='/signin' className='underline text-blue-600'>Sign In here</Link></a></div>
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
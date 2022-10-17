import React, { useContext } from 'react';
import { authContext } from '../Context/UserContext';
import image from '../images/6b087603862a127ea290e0a47ed932bf.jpg'

const Profile = () => {
    const { user } = useContext(authContext)
    return (
        <div>
            <h3 className='p-5 text-white text-3xl'>Welcome {user.displayName}</h3>

            <div className="card w-3/4	 mt-12 mx-auto lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{user.displayName}</h2>
                    <h4 className="text-xl text-start">{user.email}</h4>
                </div>
            </div>
        </div>
    );
};

export default Profile;
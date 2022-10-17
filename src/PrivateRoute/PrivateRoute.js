import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(authContext)
    if (loader) {

        return <div>Loading...</div>
    }
    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;
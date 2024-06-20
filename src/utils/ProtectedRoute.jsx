import React from 'react';
import { Navigate } from 'react-router-dom';
import { SIGN_IN } from '../routes/routesConstant';

const ProtectedRoute = ({ children, isAuthenticated }) => {
    return isAuthenticated ? children : <Navigate to={SIGN_IN} />;
};

export default ProtectedRoute;

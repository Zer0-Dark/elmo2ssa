import { Navigate } from "react-router-dom";
/* eslint-disable react/prop-types */




const ProtectedRoute = (props) => {
    if (!props.login) {
        // If user is not authenticated, redirect to the login page
        return <Navigate to="/login" replace />;
    }

    // If authenticated, allow access to the route
    return props.children;
};

export default ProtectedRoute;

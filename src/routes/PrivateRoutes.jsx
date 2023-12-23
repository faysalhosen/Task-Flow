/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
  
    if (loading) {
        return <div className=" min-h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }
    else{
        return <Navigate state={{from: location}} to={'/login'} replace></Navigate>
    }
};

export default PrivateRoute;
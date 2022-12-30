import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ children, user }) {
    console.log(user);
    if(!user) {
        return <Navigate to="/" replace/>
    }    

    return <>
        {children ? children : <Outlet/>}
    </>
}
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ children, user }) {
    if(!user) {
        return <Navigate to="/" replace/>
    }    

    return <>
        {children ? children : <Outlet/>}
    </>
}
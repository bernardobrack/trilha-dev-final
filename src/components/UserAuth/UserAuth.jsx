import { useContext, useEffect } from "react";
import useSWR from "swr";
import Loader from "../Loader/Loader";
import { Navigate, redirect, useLocation } from "react-router-dom";
import { AppContext } from "../AppProvider/AppProvider";
import "./UserAuth.css";

export default function UserAuth() {
    const navigation = useLocation();
    const {user, setUser} = useContext(AppContext);
    const {data} = useSWR("https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/profile", getUser);
    function getUser(url) {
        return fetch(url)
        .then(r => r.json());
    }
    useEffect(() => {
        if(navigation?.state?.email && navigation?.state?.pwd) {
            setUser(data);
            return;
        }
        redirect("/", {replace: true})
    },[data])
        return <div className="auth-loader">
            {!data ? <Loader /> : <Navigate to="/home" replace/>}

        </div>
    
}
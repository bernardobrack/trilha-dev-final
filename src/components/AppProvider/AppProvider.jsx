import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({children}) {
    const [user, setUser] = useState(null);
    const value = {
        user: user,
        setUser: setUser
    };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export {AppContext, AppProvider};
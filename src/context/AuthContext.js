import { createContext } from "react";

const INITIAL_STATE = [];

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {

    return (
        <AuthContext.Provider>

            {children}
        </AuthContext.Provider>
    )
};
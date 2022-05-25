import { createContext } from "react";

const INITIAL_STATE = [];

export const SearchContext = createContext(INITIAL_STATE);

export const SearchContextProvider = ({ children }) => {

    return (
        <SearchContext.Provider>
            {children}
        </SearchContext.Provider>
    )
};
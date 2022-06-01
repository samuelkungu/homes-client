import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    area: undefined,
    room: undefined,
    amount: undefined,

};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload
            break;
        case "RESET_SEARCH":
            return INITIAL_STATE
            break;

        default:
            break;
    }
};

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

    return (
        <SearchContext.Provider value={{
            area: state.area,
            room: state.room,
            amount: state.amount,
            dispatch,
        }}>
            {children}
        </SearchContext.Provider>
    )
};
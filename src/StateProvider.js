import React, { createContext, useContext, useReducer } from "react";

//Prepares the data layer
export const StateConext = createContext();

//Wrap our app and provide data layer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateConext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateConext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateConext);
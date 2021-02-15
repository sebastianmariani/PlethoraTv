import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    watchList: [],
    favorite: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addShowToWatchlist = show => {
        dispatch({type: 'ADD_SHOW_TO_WATCHLIST', payload: show})
    }
    return (
        <GlobalContext.Provider value={{ 
            watchList: state.watchList , 
            favorite: state.favorite , 
            addShowToWatchlist
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
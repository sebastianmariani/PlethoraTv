import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    watchlist: localStorage.getItem('watchlist')
        ? JSON.parse(localStorage.getItem('watchlist'))
        : [],
    favorite: localStorage.getItem('favorite')
        ? JSON.parse(localStorage.getItem('favorite'))
        : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist',JSON.stringify(state.watchlist))
        localStorage.setItem('favorite',JSON.stringify(state.favorite))
    }, [state])

    //actions

    const addShowToWatchlist = show => {
        dispatch({type: 'ADD_SHOW_TO_WATCHLIST', payload: show})
    }

    const removeShowFromWatchlist = id => {
        dispatch({type: 'REMOVE_SHOW_FROM_WATCHLIST', payload: id})
    }
    const addShowToFavorite = show => {
        dispatch({type: 'ADD_SHOW_TO_FAVORITE', payload: show})
    }

    const removeShowFromFavorite = id => {
        dispatch({type: 'REMOVE_SHOW_FROM_FAVORITE', payload: id})
    }

    return (
        <GlobalContext.Provider value={{ 
            watchlist: state.watchlist , 
            favorite: state.favorite , 
            addShowToWatchlist,
            removeShowFromWatchlist,
            addShowToFavorite,
            removeShowFromFavorite,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
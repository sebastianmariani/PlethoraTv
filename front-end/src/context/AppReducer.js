const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SHOW_TO_WATCHLIST':
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            };
        case 'REMOVE_SHOW_FROM_WATCHLIST':
            return {
                ...state,
                watchlist: state.watchlist.filter(show => show.id !== action.payload)
            };
        case 'ADD_SHOW_TO_FAVORITE':
            return {
                ...state,
                favorite: [action.payload, ...state.favorite]
            };
        case 'REMOVE_SHOW_FROM_FAVORITE':
            return {
                ...state,
                favorite: state.favorite.filter(show => show.id !== action.payload)
            }
        default:
            return state;
    }
}

export default AppReducer
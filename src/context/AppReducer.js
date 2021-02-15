const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SHOW_TO_WATCHLIST':
            return {
                ...state,
                watchList: [action.payload, ...state.watchList]
            }
        default:
            return state;
    }
}

export default AppReducer
function openNav(state = false, action) {
    switch(action.type) {
        case "TOGGLE_NAV":
            return !state;
        default:
            return state;
    }
}

const reducers = {
    openNav
};

export default reducers
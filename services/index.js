import serviceState from "./ServiceState";

// Global state (for save global state)
const stateRedux = (state, action) => {
    return {
        // last any state
        ...state,
        // action.key is state name : action is value state
        [action.key]: { ...action },
    };
};
// for save Global state
const serviceRedux = (state = serviceState, action = () => {}) => {
    return stateRedux(state, action);
};
export default serviceRedux;

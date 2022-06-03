import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import serviceRedux from "../services";

const store = createStore(serviceRedux, applyMiddleware(thunk));
const StoreProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;

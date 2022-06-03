import React from "react";
import Header from "../header";
import Style from "./style";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Style>
                <div className="container">{props.children}</div>
            </Style>
        </React.Fragment>
    );
};
export default Layout;

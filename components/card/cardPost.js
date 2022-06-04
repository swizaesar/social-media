import React from "react";
import { CardPostStyle } from "./style";
import { Button } from "antd";
const CardPost = ({ data, gutter, editAction = () => {} }) => {
    return (
        <CardPostStyle
            gutter={gutter}
            actions={[
                <div onClick={() => editAction(data)}>Edit</div>,
                <div>Comment</div>,
                <div>Delete</div>,
            ]}
        >
            <h3>{data.title}</h3>
            <div>{data.body}</div>
        </CardPostStyle>
    );
};
export default CardPost;
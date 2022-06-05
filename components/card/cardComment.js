import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React from "react";
import { CardCommentStyle } from "./style";

const CardComment = ({ data }) => {
    return (
        <CardCommentStyle>
            <div className="comment">
                <div className="comment-name">{data.name}</div>
                <div className="comment-email">{data.email}</div>
            </div>
            <div className="desc">{data.body}</div>
            <div className="comment-action">
                <div className="comment-action__delete">
                    <DeleteOutlined /> Delete
                </div>
                <div className="comment-action__edit">
                    <EditOutlined /> Edit
                </div>
            </div>
        </CardCommentStyle>
    );
};
export default CardComment;

import React from "react";
import { CardPostStyle } from "./style";
import Link from "next/link";
const CardPost = ({
    data,
    gutter,
    editAction = () => {},
    deleteAction = () => {},
}) => {
    return (
        <CardPostStyle
            gutter={gutter}
            actions={[
                <div onClick={() => editAction(data)}>Edit</div>,
                <Link href={`/comments/${data.id}`}>
                    <a>Comment</a>
                </Link>,
                <div onClick={() => deleteAction(data)}>Delete</div>,
            ]}
        >
            <h3>{data.title}</h3>
            <div>{data.body}</div>
        </CardPostStyle>
    );
};
export default CardPost;

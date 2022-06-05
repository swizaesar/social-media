import React from "react";
import { CardPostStyle } from "./style";
import Link from "next/link";
import CardComment from "./cardComment";
import fetchApi from "../../services/fetchApi";
import { useDispatch, useSelector } from "react-redux";
const CardPost = ({
    data,
    gutter,
    length,
    editAction = () => {},
    deleteAction = () => {},
    commentPost = () => {},
}) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [comments, setComments] = React.useState([]);
    React.useEffect(() => {
        if (data) {
            fetchApi.getCommentList({ dispatch, postId: data.id, key: length });
        }
    }, [data]);
    React.useEffect(() => {
        if (state?.comments[`comment_${length}`]?.data) {
            setComments(state.comments[`comment_${length}`].data);
        }
    }, [state]);
    return (
        <CardPostStyle gutter={gutter}>
            <div className="card-post">
                <div className="card-post__section">
                    <h3 className="card-post__section-title">{data.title}</h3>
                    <div>{data.body}</div>
                </div>
                <div className="card-post__action">
                    <div
                        className="card-post__action-button border"
                        onClick={() => editAction(data)}
                    >
                        Edit
                    </div>
                    <div
                        className="card-post__action-button"
                        onClick={() => deleteAction(data)}
                    >
                        Delete
                    </div>
                </div>
            </div>

            <div className="card-comment">
                <div
                    className="card-comment__form"
                    onClick={() => commentPost(data, length)}
                >
                    Comment
                </div>
                {comments.map((item, key) => {
                    return <CardComment key={key} post={data} data={item} />;
                })}
            </div>
        </CardPostStyle>
    );
};
export default CardPost;

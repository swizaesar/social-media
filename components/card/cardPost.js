import React from "react";
import { CardPostStyle } from "./style";
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
    handleDeleteComment = () => {},
    handleEditComment = () => {},
}) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [showDataComment, setShowDataComment] = React.useState(1);
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
    const loadMore = () => {
        setShowDataComment(showDataComment === 1 ? comments.length : 1);
    };
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
                    return (
                        key < showDataComment && (
                            <CardComment
                                handleEditComment={handleEditComment}
                                id={length}
                                handleDeleteComment={handleDeleteComment}
                                key={key}
                                post={data}
                                data={item}
                            />
                        )
                    );
                })}
                {comments.length > 1 && (
                    <div className="see-more" onClick={loadMore}>
                        See {showDataComment === 1 ? "more" : "less"}
                    </div>
                )}
            </div>
        </CardPostStyle>
    );
};
export default CardPost;

import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/layout";
import fetchApi from "../../../services/fetchApi";
import Posts from "../../../components/pages/posts";
import PostModal from "../../../components/modal/postModal";
import DeletePost from "../../../components/modal/deletePost";
import CommentPost from "../../../components/modal/commentPost";

const PostsPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = React.useState([]);
    const [postDetail, setPostDetail] = React.useState({});
    const [isComment, setComment] = React.useState(false);
    const [titleValue, setTitleValue] = React.useState("");
    const [descValue, setDescValue] = React.useState("");
    const [isEdit, setEdit] = React.useState(false);
    const [user, setUser] = React.useState(false);
    const [isShowEdit, setShowEdit] = React.useState(false);
    const [titleModal, setTitleModal] = React.useState("Create Post");
    const [isDelete, setDelete] = React.useState(false);
    const [emailComment, setEmailComment] = React.useState("");
    const [titleComment, setTitleComment] = React.useState("");
    const [descComment, setDescComment] = React.useState("");
    const [commentLength, setCommentLength] = React.useState(0);
    const [commentEdit, setCommentEdit] = React.useState({});
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const onChangeInput = (type, value) => {
        switch (type) {
            case "title":
                return setTitleValue(value);
            case "emailComment":
                return setEmailComment(value);
            case "titleComment":
                return setTitleComment(value);
            case "descComment":
                return setDescComment(value);
            default:
                return setDescValue(value);
        }
    };
    const toggleModalEdit = (data) => {
        setPostDetail(data);
        setShowEdit(!isShowEdit);
        setTitleModal("Edit Post");
        setTitleValue(data.title);
        setEdit(true);
        setDescValue(data.body);
    };

    const toggleModalCreate = () => {
        setShowEdit(!isShowEdit);
        setTitleModal("Create Post");
        setEdit(false);
        setTitleValue("");
        setDescValue("");
    };
    const handleCreatePost = () => {
        let data = {
            title: titleValue,
            body: descValue,
            userId: user.id,
        };
        fetchApi.createPost({ dispatch, data });
    };
    const handleEditPost = () => {
        let updateData = {
            title: titleValue,
            body: descValue,
            userId: user.id,
            id: postDetail.id,
        };
        fetchApi.editPost({ dispatch, data: updateData });
    };
    const handleDeleteModal = (value) => {
        setDelete(!isDelete);
        setPostDetail(value);
    };

    const handleConfirmDelete = () => {
        let updateData = {
            title: titleValue,
            body: descValue,
            userId: user.id,
            id: postDetail.id,
        };
        fetchApi.deletePost({ dispatch, data: updateData });
    };
    const handlePostComment = (data, comments) => {
        setEdit(false);
        setCommentLength(comments);
        setComment(!isComment);
        setPostDetail(data);
    };
    const handleSubmitComment = () => {
        let dataPost = {
            body: descComment,
            email: emailComment,
            name: titleComment,
            postId: postDetail.id,
        };
        fetchApi.postCommentList({
            dispatch,
            data: dataPost,
            postId: postDetail.id,
            key: commentLength,
        });
    };
    const handleDeleteComment = (data, key) => {
        let deleteComment = state.comments[`comment_${key}`].data.filter(
            (item) => item.id !== data.id
        );
        fetchApi.deleteCommentList({
            dispatch,
            data: deleteComment,
            key: key,
        });
    };
    const handleEditComment = (data, key) => {
        setCommentLength(key);
        setEdit(true);
        setCommentEdit(data);
        setTitleComment(data.name);
        setDescComment(data.body);
        setEmailComment(data.email);
        setComment(!isComment);
    };
    const handleEditCommentSubmit = () => {
        let filter = state.comments[`comment_${commentLength}`].data.filter(
            (item) => item.id !== commentEdit.id
        );
        let dataEditComment = {
            body: descComment,
            email: emailComment,
            id: commentEdit.id,
            name: titleComment,
            postId: commentEdit.id,
        };
        let x = [dataEditComment, ...filter];
        fetchApi.updateCommentList({
            dispatch,
            data: x,
            key: commentLength,
        });
    };
    React.useEffect(() => {
        if (slug !== undefined) {
            let params = {
                userId: slug,
            };
            fetchApi.getPostsList({ dispatch, params });
            fetchApi.getUsersDetail({
                dispatch,
                id: slug,
            });
        }
    }, [dispatch, slug]);
    React.useEffect(() => {
        if (state?.posts?.data) {
            setData(state.posts.data);
            fetchApi.postListClear({ dispatch });
            setTimeout(() => {
                setShowEdit(false);
            }, 500);
        }
        if (state?.userDetail?.isSuccess) {
            setUser(state.userDetail.data);
        }
        if (state?.createPost?.isSuccess) {
            let dataUpdate = [state.createPost.data, ...data];
            fetchApi.updatePostList({ dispatch, data: dataUpdate });
            fetchApi.createPostClear({ dispatch });
        }
        if (state?.editPost?.isSuccess) {
            let filterData = data.filter((item) => item.id !== postDetail.id);
            let dataUpdate = [state.editPost.data, ...filterData];
            fetchApi.updatePostList({ dispatch, data: dataUpdate });
            fetchApi.editPostClear({ dispatch });
        }
        if (state?.deletePost?.isSuccess) {
            setDelete(false);
            let filterData = data.filter((item) => item.id !== postDetail.id);
            let dataUpdate = [...filterData];
            fetchApi.updatePostList({ dispatch, data: dataUpdate });
            fetchApi.deletePostClear({ dispatch });
        }
        if (state[`comment_${commentLength}`]?.data) {
            let dataUpdate = [
                state[`comment_${commentLength}`].data,
                ...state.comments[`comment_${commentLength}`].data,
            ];
            fetchApi.updateCommentList({
                dispatch,
                data: dataUpdate,
                key: commentLength,
            });
            fetchApi.postCommentsClear({ dispatch, key: commentLength });
            setComment(false);
            setEmailComment("");
            setTitleComment("");
            setDescComment("");
        }
        if (state?.comments[`comment_${commentLength}`]?.data) {
            setComment(false);
            setEmailComment("");
            setTitleComment("");
            setDescComment("");
        }
    }, [state, dispatch]);
    return (
        <Layout>
            <Posts
                handleEditComment={handleEditComment}
                handleDeleteComment={handleDeleteComment}
                handlePostComment={handlePostComment}
                handleDeleteModal={handleDeleteModal}
                toggleModalCreate={toggleModalCreate}
                user={user}
                data={data}
                openModal={toggleModalEdit}
            />
            <PostModal
                handleEditPost={handleEditPost}
                isEdit={isEdit}
                handleCreatePost={handleCreatePost}
                onChangeInput={onChangeInput}
                titleValue={titleValue}
                descValue={descValue}
                title={titleModal}
                isShow={isShowEdit}
                handleCancel={toggleModalEdit}
            />
            <DeletePost
                handleConfirmDelete={handleConfirmDelete}
                data={postDetail}
                handleCancel={handleDeleteModal}
                isShow={isDelete}
            />
            <CommentPost
                isEdit={isEdit}
                handleEditCommentSubmit={handleEditCommentSubmit}
                handleSavePost={handleSubmitComment}
                handleCancel={handlePostComment}
                titleComment={titleComment}
                emailComment={emailComment}
                descComment={descComment}
                onChangeInput={onChangeInput}
                isShow={isComment}
            />
        </Layout>
    );
};
export default PostsPage;

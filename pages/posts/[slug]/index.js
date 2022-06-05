import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/layout";
import fetchApi from "../../../services/fetchApi";
import Posts from "../../../components/pages/posts";
import PostModal from "../../../components/modal/postModal";
import DeletePost from "../../../components/modal/deletePost";

const PostsPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = React.useState([]);
    const [postDetail, setPostDetail] = React.useState({});
    const [titleValue, setTitleValue] = React.useState("");
    const [descValue, setDescValue] = React.useState("");
    const [isEdit, setEdit] = React.useState(false);
    const [user, setUser] = React.useState(false);
    const [isShowEdit, setShowEdit] = React.useState(false);
    const [titleModal, setTitleModal] = React.useState("Create Post");
    const [isDelete, setDelete] = React.useState(false);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const onChangeInput = (type, value) => {
        switch (type) {
            case "title":
                return setTitleValue(value);
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
        }
        if (state?.userDetail?.isSuccess) {
            setUser(state.userDetail.data);
        }
        if (state?.createPost?.isSuccess) {
            setShowEdit(!isShowEdit);
            let dataUpdate = [state.createPost.data, ...data];
            fetchApi.updatePostList({ dispatch, data: dataUpdate });
            fetchApi.createPostClear({ dispatch });
        }
        if (state?.editPost?.isSuccess) {
            setShowEdit(!isShowEdit);
            let filterData = data.filter((item) => item.id !== postDetail.id);
            let dataUpdate = [state.editPost.data, ...filterData];
            fetchApi.updatePostList({ dispatch, data: dataUpdate });
            fetchApi.editPostClear({ dispatch });
        }
        if (state?.deletePost?.isSuccess) {
            setDelete(!isDelete);
            let filterData = data.filter((item) => item.id !== postDetail.id);
            let dataUpdate = [...filterData];
            fetchApi.updatePostList({ dispatch, data: dataUpdate });
            fetchApi.deletePostClear({ dispatch });
        }
    }, [state, dispatch]);
    return (
        <Layout>
            <Posts
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
        </Layout>
    );
};
export default PostsPage;

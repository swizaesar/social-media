import serviceAction from "../ServiceApi";

const fetchApi = {
    getUsersList: ({ dispatch }) => {
        serviceAction(dispatch).fetchApi({
            url: "/users",
            method: "GET",
            key: "users",
        });
    },
    getUsersDetail: ({ dispatch, id }) => {
        serviceAction(dispatch).fetchApi({
            url: `/users/${id}`,
            method: "GET",
            key: "userDetail",
        });
    },
    getAlbumsList: ({ dispatch, params }) => {
        serviceAction(dispatch).fetchApi({
            url: "/albums",
            params: params,
            method: "GET",
            key: "albums",
        });
    },
    getPostsList: ({ dispatch, params }) => {
        serviceAction(dispatch).fetchApi({
            url: `/posts`,
            method: "GET",
            params: params,
            key: "posts",
        });
    },
    editPost: ({ dispatch, data }) => {
        serviceAction(dispatch).fetchApi({
            url: `/posts/${data.userId}`,
            method: "PUT",
            data: data,
            key: "editPost",
        });
    },
    deletePost: ({ dispatch, data }) => {
        serviceAction(dispatch).fetchApi({
            url: `/posts/${data.userId}`,
            method: "DELETE",
            data: data,
            key: "deletePost",
        });
    },
    deletePostClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxSetData({
            type: "CLEAR",
            key: "deletePost",
        });
    },
    editPostClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxSetData({
            type: "CLEAR",
            key: "editPost",
        });
    },
    postListClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: "posts",
        });
    },
    updatePostList: ({ dispatch, data }) => {
        serviceAction(dispatch).reduxSetData({
            data: data,
            key: "posts",
            type: 200,
        });
    },
    createPost: ({ dispatch, data }) => {
        serviceAction(dispatch).fetchApi({
            url: `/posts`,
            method: "POST",
            data: data,
            key: "createPost",
        });
    },
    createPostClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: "createPost",
        });
    },
    getAlbumsDetail: ({ dispatch, id }) => {
        serviceAction(dispatch).fetchApi({
            url: `/albums/${id}`,
            method: "GET",
            key: "albumDetail",
        });
    },
    getAlbumsClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: "albumDetail",
        });
    },
    getPhotosList: ({ dispatch, params }) => {
        serviceAction(dispatch).fetchApi({
            url: "/photos",
            params: params,
            method: "GET",
            key: "photos",
        });
    },
    getCommentList: ({ dispatch, postId, key }) => {
        serviceAction(dispatch).fetchApi({
            url: `/posts/${postId}/comments`,
            method: "GET",
            group: true,
            groupName: "comments",
            key: `comment_${key}`,
        });
    },

    postCommentList: ({ dispatch, data, postId, key }) => {
        serviceAction(dispatch).fetchApi({
            url: `/posts/${postId}/comments`,
            method: "POST",
            data: data,
            key: `comment_${key}`,
        });
    },
    deleteCommentList: ({ dispatch, data, key }) => {
        serviceAction(dispatch).reduxSetData({
            type: 200,
            data: data,
            group: true,
            groupName: "comments",
            key: `comment_${key}`,
        });
    },
    updateCommentList: ({ dispatch, data, key }) => {
        serviceAction(dispatch).reduxSetData({
            data: data,
            type: 200,
            group: true,
            groupName: "comments",
            key: `comment_${key}`,
        });
    },
    postCommentsClear: ({ dispatch, key }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: `comment_${key}`,
        });
    },
};
export default fetchApi;

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
    createPostClear: ({ dispatch, data }) => {
        serviceAction(dispatch).reduxSetData({
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
};
export default fetchApi;

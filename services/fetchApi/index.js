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

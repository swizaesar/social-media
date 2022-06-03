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
};
export default fetchApi;

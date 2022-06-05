import axios from "axios";
// Service API
const serviceApi = async (options) => {
    const configAxios = {
        baseURL: "https://jsonplaceholder.typicode.com/",
    };
    const axiosConfig = axios.create(configAxios);
    return await axiosConfig(options)
        .then((res) => {
            return {
                response: res.data,
                success: true,
                error: false,
                key: options.key,
                group: options.group || false,
                groupName: options.groupName || "",
                type: res.status,
            };
        })
        .catch((err) => {
            return {
                response: err.data,
                success: false,
                error: true,
                key: options.key,
                group: options.group || false,
                groupName: options.groupName || "",
                type: res.status,
            };
        });
};
// Type Service Action Fetch API GET / POST
const fetchApi = async (dispatch, value) => {
    const result = await serviceApi(value);
    if (result) {
        dispatch({
            data: result.response,
            headers: result.headers,
            isError: result.error,
            isSuccess: result.success,
            key: value.key,
            group: value.group || false,
            groupName: value.groupName || "",
            type: result.type,
        });
    }
};
const clearData = (dispatch, value) => {
    dispatch(value);
};
const setData = (dispatch, value) => {
    dispatch(value);
};

// Service Action Type
const serviceAction = (dispatch) => ({
    // Fetch API Type
    fetchApi: (value) => {
        fetchApi(dispatch, value);
    },
    reduxClear: (value) => {
        clearData(dispatch, value);
    },
    reduxSetData: (value) => {
        setData(dispatch, value);
    },
});
export default serviceAction;

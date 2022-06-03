import React from "react";
import Users from "../../components/pages/users";
import Layout from "../../components/layout";
import { useDispatch, useSelector } from "react-redux";
import fetchApi from "../../services/fetchApi";

const UsersPage = () => {
    const [data, setData] = React.useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    React.useEffect(() => {
        fetchApi.getUsersList({ dispatch });
    }, [dispatch]);
    React.useEffect(() => {
        if (state?.users?.isSuccess) {
            setData(state.users.data);
        }
    }, [state]);
    console.log(data);
    return (
        <Layout>
            <Users data={data} />
        </Layout>
    );
};
export default UsersPage;

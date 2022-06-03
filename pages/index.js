import React from "react";
import Layout from "../components/layout";
import Home from "../components/pages/home";
import { useDispatch, useSelector } from "react-redux";
import fetchApi from "../services/fetchApi";

const HomePage = () => {
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
    return (
        <Layout>
            <Home data={data} />
        </Layout>
    );
};
export default HomePage;

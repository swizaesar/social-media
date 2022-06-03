import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import fetchApi from "../../../services/fetchApi";
import serviceAction from "../../../services/ServiceApi";

const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    React.useEffect(() => {
        fetchApi.getUsersList({ dispatch });
    }, [dispatch]);
    React.useEffect(() => {
        if (state?.users?.isSuccess) {
            console.log(state.users.data);
        }
    }, [state]);

    return (
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            vitae unde error molestiae quidem soluta magnam, libero laboriosam
            nihil sed nesciunt necessitatibus quod. Alias ab autem quaerat
            asperiores id ad!
        </div>
    );
};
export default Home;

import React from "react";
import Albums from "../../components/pages/albums";
import Layout from "../../components/layout";
import { useDispatch, useSelector } from "react-redux";
import fetchApi from "../../services/fetchApi";
import { useRouter } from "next/router";
const AlbumsPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = React.useState([]);
    const [user, setUser] = React.useState(false);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    React.useEffect(() => {
        if (slug !== undefined) {
            let paramsAlbums = {
                userId: slug,
            };
            fetchApi.getAlbumsList({ dispatch, params: paramsAlbums });
            fetchApi.getUsersDetail({ dispatch, id: slug });
        }
    }, [dispatch, slug]);
    React.useEffect(() => {
        if (state?.albums?.isSuccess) {
            setData(state.albums.data);
        }
        if (state?.userDetail?.isSuccess) {
            setUser(state.userDetail.data);
        }
    }, [state]);
    return (
        <Layout>
            <Albums userName={user?.name} data={data} />
        </Layout>
    );
};
export default AlbumsPage;

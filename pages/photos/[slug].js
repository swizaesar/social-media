import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Photos from "../../components/pages/photos";
import Layout from "../../components/layout";
import fetchApi from "../../services/fetchApi";

const PhotosPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = React.useState([]);
    const [user, setUser] = React.useState(false);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    React.useEffect(() => {
        if (slug !== undefined) {
            let paramsPhotos = {
                albumId: slug,
            };
            fetchApi.getAlbumsDetail({ dispatch, id: slug });
            fetchApi.getPhotosList({ dispatch, params: paramsPhotos });
        }
    }, [dispatch, slug]);
    React.useEffect(() => {
        if (state?.albumDetail?.isSuccess) {
            setData(state.albumDetail.data);
            console.log("state di effect", state);
            console.log(state.albumDetail.data);
            fetchApi.getUsersDetail({
                dispatch,
                id: state.albumDetail.data.userId,
            });
            fetchApi.getAlbumsClear({ dispatch });
        }
        if (state?.userDetail?.isSuccess) {
            setUser(state.userDetail.data);
            console.log("state di effect user", state);
        }
    }, [state]);
    return (
        <Layout>
            <Photos userName={user?.name} data={data} />
        </Layout>
    );
};
export default PhotosPage;

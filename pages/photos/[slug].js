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
    const [album, setAlbum] = React.useState([]);
    const [user, setUser] = React.useState(false);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    React.useEffect(() => {
        if (slug !== undefined) {
            let paramsPhotos = {
                albumId: slug,
                limit: 5,
            };

            fetchApi.getAlbumsDetail({ dispatch, id: slug });
            fetchApi.getPhotosList({ dispatch, params: paramsPhotos });
        }
    }, [dispatch, slug]);
    React.useEffect(() => {
        if (state?.photos?.isSuccess) {
            setData(state.photos.data);
        }
        if (state?.albumDetail?.isSuccess) {
            setAlbum(state.albumDetail.data);
            fetchApi.getUsersDetail({
                dispatch,
                id: state.albumDetail.data.userId,
            });
            fetchApi.getAlbumsClear({ dispatch });
        }
        if (state?.userDetail?.isSuccess) {
            setUser(state.userDetail.data);
        }
    }, [state, dispatch]);
    console.log(data);
    console.log(user);
    console.log(album);
    return (
        <Layout>
            <Photos user={user} data={data} album={album} />
        </Layout>
    );
};
export default PhotosPage;

import { Image } from "antd";
import React from "react";
import { CardPhotoStyle } from "./style";
const CardPhoto = ({ data, gutter = 0 }) => {
    return (
        <CardPhotoStyle
            gutter={gutter}
            cover={<Image alt="example" src={data.url} />}
        >
            <div className="title">{data.title}</div>
        </CardPhotoStyle>
    );
};
export default CardPhoto;

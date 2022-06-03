import React from "react";
import CardAlbum from "../../card/cardAlbum";
import { FileImageOutlined } from "@ant-design/icons";
import Style from "./style";
const Albums = ({ userName = "", data = [] }) => {
    return (
        <Style>
            <div>
                <h2 className="title">
                    {userName} Albums <FileImageOutlined />
                </h2>
                {data.map((item, key) => {
                    return (
                        <CardAlbum
                            data={item}
                            length={data.length}
                            id={key}
                            key={key}
                        />
                    );
                })}
            </div>
        </Style>
    );
};
export default Albums;

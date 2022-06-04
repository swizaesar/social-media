import { Col, Row } from "antd";
import React from "react";
import CardPhoto from "../../card/cardPhoto";
import { FileImageOutlined } from "@ant-design/icons";
import Style from "./style";
import Link from "next/link";
const Photos = ({ user, data = [], album }) => {
    const gutter = 16;
    return (
        <Style>
            <div>
                <h2 className="title">
                    {user.name} Photos <FileImageOutlined />
                </h2>
                <div className="subtitle">
                    <Link href={`/albums/${user.id}`}>
                        <a>Album</a>
                    </Link>{" "}
                    {">"} {album.title}
                </div>
            </div>
            <Row gutter={gutter}>
                {data.map((item, key) => {
                    return (
                        <Col xl={8} sm={16} xs={24} key={key}>
                            <CardPhoto
                                gutter={gutter}
                                user={user}
                                album={album}
                                data={item}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Style>
    );
};
export default Photos;

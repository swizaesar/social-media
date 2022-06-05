import React from "react";
import CardPost from "../../card/cardPost";
import Style from "./style";
import { Button, Col, Input, Row } from "antd";

const Posts = ({
    data,
    user,
    openModal = () => {},
    toggleModalCreate = () => {},
    handleDeleteModal = () => {},
}) => {
    const gutter = 16;
    return (
        <Style>
            <h2>{user.name} Posts</h2>
            <div className="form-post">
                <div className="form-post__button" onClick={toggleModalCreate}>
                    Create Your Post
                </div>
            </div>
            <Row gutter={gutter}>
                {data.map((item, key) => {
                    return (
                        <Col span={24} key={key}>
                            <CardPost
                                length={key}
                                deleteAction={handleDeleteModal}
                                editAction={openModal}
                                gutter={gutter}
                                data={item}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Style>
    );
};
export default Posts;

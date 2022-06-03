import { Col, Row } from "antd";
import React from "react";
import CardUser from "../../card/cardUsers";

const Users = ({ data }) => {
    const gutter = 16;
    return (
        <div>
            <Row gutter={gutter}>
                {data.map((item, key) => {
                    return (
                        <Col span={8} key={key}>
                            <CardUser gutter={gutter} data={item} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};
export default Users;

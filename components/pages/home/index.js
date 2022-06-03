import { Col, Row } from "antd";
import React from "react";
import CardUser from "../../card/cardUsers";

const Home = ({ data }) => {
    const gutter = 16;
    return (
        <div>
            <Row gutter={gutter}>
                {data.map((item, key) => {
                    return (
                        <Col xl={8} sm={12} xs={24} key={key}>
                            <CardUser gutter={gutter} data={item} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};
export default Home;

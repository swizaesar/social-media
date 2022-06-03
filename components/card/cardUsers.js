import { Card } from "antd";
import React from "react";
import { CardUserStyle } from "./style";

const CardUser = ({ data, gutter = 0 }) => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        if (data) {
            setLoading(false);
        }
    }, [data]);
    return (
        <CardUserStyle
            gutter={gutter}
            loading={loading}
            title={data.name}
            bordered={true}
        >
            <div className="card-group">
                <div className="card-group__label">Username</div>
                <div>:</div>
                <div className="card-group__value">{data.username}</div>
            </div>
            <div className="card-group">
                <div className="card-group__label">Email</div>
                <div>:</div>
                <div className="card-group__value">{data.email}</div>
            </div>
            <div className="card-group">
                <div className="card-group__label">Phone</div>
                <div>:</div>
                <div className="card-group__value">{data.phone}</div>
            </div>
            <div className="card-group">
                <div className="card-group__label">Address</div>
                <div>:</div>
                <div className="card-group__value">
                    {data.address.street}, {data.address.city},{" "}
                    {data.address.zipcode}
                </div>
            </div>
        </CardUserStyle>
    );
};
export default CardUser;

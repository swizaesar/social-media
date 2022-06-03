import { Card } from "antd";
import styled from "styled-components";
import { color } from "../../helpers/variable";

export const CardUserStyle = styled(Card)`
    margin-bottom: ${(props) => props.gutter}px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    .ant-card-body {
        height: 220px;
    }
    .card {
        &-group {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            &__label {
                width: 100px;
            }
            &__value {
                width: 180px;
                overflow-wrap: break-word;
            }
        }
    }
`;
export const CardAlbumStyle = styled.div`
    border-top: 1px solid #f0f0f0;
    background: #ffff;
    transition: all 0.25s ease;
    padding: 10px 0;
    &.last {
        border-bottom: 1px solid #f0f0f0;
    }
    .card-text {
        font-weight: 500;
        color: ${color.primary};
        transition: all 0.25s ease;
    }
    &:hover {
        transition: all 0.25s ease;
        background-color: ${color.primary};
        border-radius: 5px;
        padding: 10px;
        .card-text {
            transition: all 0.25s ease;
            color: #ffff;
        }
    }
`;

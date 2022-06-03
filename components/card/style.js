import { Card } from "antd";
import styled from "styled-components";

export const CardUserStyle = styled(Card)`
    margin-bottom: ${(props) => props.gutter}px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all 0.25s ease;
    height: 300px;
    cursor: pointer;
    &:hover {
        transition: all 0.25s ease;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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

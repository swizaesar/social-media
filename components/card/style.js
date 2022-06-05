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
export const CardPhotoStyle = styled(Card)`
    margin-bottom: ${(props) => props.gutter}px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    .title {
        font-size: 12px;
        font-weight: 700;
        white-space: break-spaces;
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
export const CardPostStyle = styled(Card)`
    margin-bottom: ${(props) => props.gutter}px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    .ant-card-body {
        padding-bottom: 0;
    }
    .card {
        &-post {
            margin-bottom: 10px;
            &__section {
                margin-bottom: 24px;
            }
            &__action {
                display: flex;
                &-button {
                    width: 50%;
                    padding: 15px;
                    text-align: center;
                    border-top: 1px solid #f0f0f0;
                    border-bottom: 1px solid #f0f0f0;
                    transition: all 0.25s ease;
                    cursor: pointer;
                    &.center {
                        border-right: 1px solid #f0f0f0;
                        border-left: 1px solid #f0f0f0;
                    }
                    &:hover {
                        color: #6a676b;
                        background-color: #f0f2f5;
                        transition: all 0.25s ease;
                    }
                    &.border {
                        border-right: 1px solid #f0f0f0;
                    }
                }
            }
        }
        &-comment {
            &__form {
                display: flex;
                align-items: center;
                &-button {
                    border: unset;
                    color: #4a4a4a;
                }
                .ant-input {
                    border: unset;
                    border-bottom: 1px solid #f0f0f0;
                    margin-right: 20px;
                    &:focus {
                        box-shadow: unset;
                    }
                }
            }
        }
    }
`;
export const CardCommentStyle = styled.div`
    padding: 15px 0;
    border-top: 1px solid #f0f0f0;
    margin-top: 15px;
    .comment {
        margin-bottom: 10px;
        &-name {
            font-weight: 600;
            font-size: 12px;
        }
        &-email {
            font-size: 10px;
            color: #aaa;
        }
        &-action {
            display: flex;
            align-items: center;
            font-size: 12px;
            &__delete {
                margin-right: 25px;
                cursor: pointer;
            }
            &__edit {
                cursor: pointer;
            }
        }
    }
    .desc {
        margin-bottom: 10px;
    }
`;

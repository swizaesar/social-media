import styled from "styled-components";
import { color } from "../../helpers/variable";

const HeaderStyle = styled.header`
    padding: 20px 0;
    background-color: ${color.primary};
    .header {
        &-menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &__home {
                color: #fff;
                font-weight: 500;
                position: relative;
                &.active {
                    &:before {
                        content: "";
                        height: 2px;
                        border-radius: 5px;
                        background-color: #fff;
                        bottom: 0;
                        left: 0;
                        position: absolute;
                        right: 0;
                        z-index: 2;
                    }
                }
            }
            &__github {
                &-item {
                    background-color: #fff;
                    color: #24292f;
                    padding: 10px 15px;
                    border-radius: 5px;
                    font-weight: 500;
                    img {
                        width: 25px;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
`;
export default HeaderStyle;

import styled from "styled-components";

const Style = styled.div`
    max-width: 720px;
    margin: auto;
    .form {
        &-post {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
            &__button {
                padding: 10px 20px;
                border-radius: 50px;
                background: #f0f2f5;
                color: #6a6b75;
                cursor: pointer;
                width: 100%;
                text-align: left;
            }
        }
    }
`;
export default Style;

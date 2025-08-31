import { styled } from "styled-components";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
        font-size: 24px;
    }

    small {
        opacity: 0.5;
        font-size: 13px;
        margin-top: -5px;
    }

    footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 15px;

        button {
            width: 45%;
            border: 0;
            border-radius: 5px;
            padding: 10px;
            cursor: pointer;
            transition-duration: .2s;

            &:first-child {
                background-color: #fff;
                color: #000;

                &:hover {
                    background-color: #eee;
                }
            }

            &:last-child {
                background-color: #000;
                color: #fff;
            }

            &:hover {
                opacity: 0.8;
            }
        }
    }
`;

export {
    Layout
}
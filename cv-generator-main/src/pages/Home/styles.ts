import styled from "styled-components";

const Layout = styled.div`
    background-color: #eff2f9;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;

    h1 {
        max-width: 800px;
        color: #1e2532;
        font-size: 50px;
    }

    .subtitle {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
        color: #1e2532;
    }

    .description {
        font-size: 20px;
        max-width: 700px;
    }

    footer {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
`

const Button = styled.button`
    background-color: #1a91f0;
    border: none;
    padding: 20px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition-duration: .2s;

    &:hover {
        background-color: #1e2532;
    }
`

export {
    Layout,
    Container,
    Button
}
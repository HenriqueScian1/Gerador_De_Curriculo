import styled from "styled-components";

const Layout = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 1;
`;

const Backrop = styled.div`
   position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    backdrop-filter: blur(1px);
    background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: #fff;
    padding: 2em;
    min-width: 350px;
    min-height: 200px;
    z-index: 2;
    border-radius: 10px;
`;

export {
    Layout,
    Backrop,
    Container
}
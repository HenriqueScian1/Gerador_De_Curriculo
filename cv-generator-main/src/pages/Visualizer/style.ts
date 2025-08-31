import styled from "styled-components";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: calc(100vh - 64px);
`;

const Header = styled.header`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 0px 32px;
    background-color: rgb(15, 20, 30);
    color: rgb(255, 255, 255);

    a {
        color: #fff; 
        align-items: center;

        svg {
            margin-bottom: -6px;
            margin-right: 5px;
        }
    }

    button {
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        appearance: none;
        outline: none;
        white-space: nowrap;
        text-align: center;
        color: rgb(255, 255, 255);
        background-color: rgb(26, 145, 240);
        border-radius: 4px;
        transition: background-color 0.1s ease 0s, color 0.1s ease 0s, box-shadow 0.1s ease 0s;
        cursor: pointer;
        border-width: 0px;
        user-select: none;
        pointer-events: auto;
        font-size: 16px;
        line-height: 20px;
        padding: 8px 12px;
    }
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-right: 1px solid rgba(255, 255, 255, 0.15);
    background-color: rgb(73, 81, 99);
    padding: 10px;
    max-width: 20%;
    overflow: hidden;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: rgb(73, 81, 99);
    overflow: hidden;
    height: 100%;
`;

const List = styled.ul`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    list-style-type: none;
    grid-gap: 10px;

    li {
        button {
            cursor: pointer;
        }

        img {
            width: 100%;
            height: auto;
            margin: 0;
        }
    }
`;

export { Layout, Left, Right, List, Header, Container };
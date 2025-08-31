import styled from "styled-components"

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;
`

const TwoColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    label {
        color: rgb(130, 139, 162);
    }
`

interface WrapperSectionProps {
    marginTop?: string
}

const WrapperSection = styled.section<WrapperSectionProps>`
    margin-top: ${(props) => props.marginTop || "40px"};
    display: flex;
    flex-direction: column;
    

    .title__section {
        margin-bottom: 10px;
        color: #1e2532;
    }

    p {
        color: rgb(130, 139, 162);
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 10px;
    }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;

    .personal_info__section {
        gap: 10px;
    }
`

const List = styled.ul`
    width: 100%;
    list-style-type: none;
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

const Item = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid rgb(239, 242, 249);
    border-radius: 4px;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        h4 {
            margin-right: 5px;
        }

        p {
            margin-bottom: 0;
        }

        button {
            background-color: transparent;
            border: 0;
            cursor: pointer;
        }
    }
`

const Input = styled.input`
    border-radius: 3px;
    padding: 12px 16px;
    width: 100%;
    display: block;
    caret-color: rgb(26, 145, 240);
    background-color: rgb(239, 242, 249);
    outline: none;
    border: 0px;
    color: rgb(30, 37, 50);
    transition: color 0.1s ease 0s;
    margin-top: 5px;
`;

const Select = styled.select`
    border-radius: 3px;
    padding: 12px 16px;
    width: 100%;
    display: block;
    caret-color: rgb(26, 145, 240);
    background-color: rgb(239, 242, 249);
    outline: none;
    border: 0px;
    color: rgb(30, 37, 50);
    transition: color 0.1s ease 0s;
    margin-top: 5px;
`;

const TextArea = styled.textarea.attrs({
    rows: 7,

})`
    border-radius: 3px;
    padding: 12px 16px;
    width: 100%;
    display: block;
    caret-color: rgb(26, 145, 240);
    background-color: rgb(239, 242, 249);
    outline: none;
    border: 0px;
    color: rgb(30, 37, 50);
    transition: color 0.1s ease 0s;
    margin-top: 5px;
    resize: vertical;
`;

const Button = styled.button`
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: rgb(26, 145, 240);
    cursor: pointer;
    background-color: transparent;
    border: 0;
`;

const ButtonGenerate = styled.button`
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    background-color: rgb(26, 145, 240);
    cursor: pointer;
    color: #fff;
    padding: 8px 16px;
    border: 0;
    width: 100%;
    margin-top: 2em;
    border-radius: 4px;
`;

export {
    Layout,
    TwoColumn,
    WrapperSection,
    Form,
    List,
    Item,
    Input,
    Select,
    TextArea,
    Button,
    ButtonGenerate,
}
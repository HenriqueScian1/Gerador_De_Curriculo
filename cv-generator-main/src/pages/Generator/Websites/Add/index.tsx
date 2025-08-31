import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getWebsites, setWebsites } from "../../../../store/reducers/cv.reducer";
import { setOpen } from "../../../../store/reducers/modal.reducer";
import { Input } from "../../styles";
import { Layout } from "./styles";

const Add = () => {
    const [title, setTitle] = useState<string>("")
    const [url, setUrl] = useState<string>("")

    const websites = useAppSelector(getWebsites)
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(setOpen(false))
    }

    const handleClickAdd = () => {
        if (url === "" || title === "") {
            dispatch(setOpen(false));
            return;
        }

        dispatch(setWebsites([...websites, { title, url }]))
        dispatch(setOpen(false));
    }

    return (
        <Layout>
            <h1>
                Adicionar Website/Rede Social
            </h1>

            <Input
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <Input
                placeholder="URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <small>
                Adicione um título e a URL do seu website/rede social. ex: "LinkedIn" e "https://www.linkedin.com/in/fulano-de-tal/"
            </small>

            <footer>
                <button onClick={() => handleClose()}>
                    Cancelar
                </button>
                <button onClick={() => handleClickAdd()}>
                    Adicionar
                </button>
            </footer>
        </Layout>
    )
}

export default Add;
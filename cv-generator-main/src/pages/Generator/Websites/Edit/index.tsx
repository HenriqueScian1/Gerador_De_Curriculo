import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getWebsites, setWebsites } from "../../../../store/reducers/cv.reducer";
import { getItemEdit, setOpen } from "../../../../store/reducers/modal.reducer";
import { Input } from "../../styles";
import { Layout } from "./styles";

const Edit = () => {
    const [title, setTitle] = useState<string>("")
    const [url, setUrl] = useState<string>("")

    const websites = useAppSelector(getWebsites)
    const itemEdit = useAppSelector(getItemEdit)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(itemEdit == null) return;

        setTitle(itemEdit.title)
        setUrl(itemEdit.url)
    }, [itemEdit])

    const handleClose = () => {
        dispatch(setOpen(false))
    }

    const handleClickEdit = () => {
        if (url === "" || title === "") {
            dispatch(setOpen(false));
            return;
        }

        const values = websites.map((item) => {
            if (item.title === itemEdit.title) {
                return {
                    title,
                    url
                };
            }

            return item;
        })

        dispatch(setWebsites(values));
        dispatch(setOpen(false));
    }

    return (
        <Layout>
            <h1>
                Editar Website/Rede Social
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
                Edite o título do seu website/rede social
            </small>

            <footer>
                <button onClick={() => handleClose()}>
                    Cancelar
                </button>
                <button onClick={() => handleClickEdit()}>
                    Editar
                </button>
            </footer>
        </Layout>
    )
}

export default Edit;
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getLanguages, setLanguages } from "../../../../store/reducers/cv.reducer";
import { setOpen, getItemEdit } from "../../../../store/reducers/modal.reducer";
import { Input, Select } from "../../styles";
import { Layout } from "./styles";

const Edit = () => {
    const [language, setLanguage] = useState<string>("")
    const [level, setLevel] = useState<string>("")

    const languages = useAppSelector(getLanguages)
    const itemEdit = useAppSelector(getItemEdit)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(itemEdit == null) return;

        setLanguage(itemEdit.language)
        setLevel(itemEdit.level)
    }, [itemEdit])

    const handleClose = () => {
        dispatch(setOpen(false))
    }

    const handleClickEdit = () => {
        if (level === "" || language === "") {
            dispatch(setOpen(false));
            return;
        }

        const values = languages.map((item) => {
            if (item.language === itemEdit.language) {
                return {
                    language,
                    level
                }
            }

            return item;
        })

        dispatch(setLanguages(values))
        dispatch(setOpen(false));
    }

    return (
        <Layout>
            <h1>
                Editar Linguagem
            </h1>

            <Input
                placeholder="Linguagem"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            />

            <Select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
            >
                <option disabled value="">Nível</option>
                <option value="native">Nativo</option>
                <option value="advanced">Avançado</option>
                <option value="intermediate">Intermediário</option>
                <option value="basic">Básico</option>
                <option value="c2">C2</option>
                <option value="c1">C1</option>
                <option value="b2">B2</option>
                <option value="b1">B1</option>
                <option value="a2">A2</option>
                <option value="a1">A1</option>
            </Select>
            <small>
                Adicione uma linguagem e o seu nível de conhecimento. ex: "Inglês" e "Avançado"
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
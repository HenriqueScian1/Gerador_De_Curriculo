import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getSkills, setSkills } from "../../../../store/reducers/cv.reducer";
import { setOpen } from "../../../../store/reducers/modal.reducer";
import { Input } from "../../styles";
import { Layout } from "./styles";

const Add = () => {
    const [skill, setSkill] = useState<string>("")

    const skills = useAppSelector(getSkills)
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(setOpen(false))
    }

    const handleClickAdd = () => {
        if (skill === "") {
            dispatch(setOpen(false));
            return;
        }

        dispatch(setSkills([...skills, skill]))
        dispatch(setOpen(false));
    }

    return (
        <Layout>
            <h1>
                Adicionar Habilidade
            </h1>

            <Input
                placeholder="Habilidade"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
            />
            <small>
                Descreva uma habilidade que você possui. ex: "Comunicação"
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
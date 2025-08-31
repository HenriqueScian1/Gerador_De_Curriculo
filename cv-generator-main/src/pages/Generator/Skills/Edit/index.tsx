import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getSkills, setSkills } from "../../../../store/reducers/cv.reducer";
import { getItemEdit, setOpen } from "../../../../store/reducers/modal.reducer";
import { Input } from "../../styles";
import { Layout } from "./styles";

const Edit = () => {
    const [skill, setSkill] = useState<string>("")

    const skills = useAppSelector(getSkills)
    const itemEdit = useAppSelector(getItemEdit)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(itemEdit == null) return;

        setSkill(itemEdit)
    }, [itemEdit])

    const handleClose = () => {
        dispatch(setOpen(false))
    }

    const handleClickEdit = () => {
        if (skill === "") {
            dispatch(setOpen(false));
            return;
        }
    
        const values = skills.map((item) => {
            if (item === itemEdit) {
                return skill;
            }

            return item;
        })

        dispatch(setSkills(values));
        dispatch(setOpen(false));
    }

    return (
        <Layout>
            <h1>
                Editar Habilidade
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
                <button onClick={() => handleClickEdit()}>
                    Edit
                </button>
            </footer>
        </Layout>
    )
}

export default Edit;
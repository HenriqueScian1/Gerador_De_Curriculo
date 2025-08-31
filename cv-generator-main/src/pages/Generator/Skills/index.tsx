import { Pen, Trash } from "phosphor-react";
import ListCards from "../../../components/ListCards";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { CVProps, getSkills, setSkills } from "../../../store/reducers/cv.reducer";
import { setChildren, setItemEdit, setOpen } from "../../../store/reducers/modal.reducer";
import { WrapperSection, Button, Item } from "../styles";
import AddSkills from "./Add";
import ModalDelete from "../../../components/Generator/ModalDelete";
import Edit from "./Edit";

const Skills = () => {
    const skills = useAppSelector(getSkills)
    const dispatch = useAppDispatch();

    const handleClickAdd = () => {
        const element = <AddSkills />
        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    const handleClickEdit = (item: CVProps['skills'][0]) => {
        const element = <Edit />
        dispatch(setItemEdit(item))
        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    const handleOpenDelete = (
        item: CVProps['skills'][0]
    ) => {
        const element = <ModalDelete
            item={item}
            callback={(value) => deleteItem(value)}
            title={"Deletar skill"}
            description={`<p>Tem certeza que deseja deletar a habilidade <b>"${item}"</b>?</p>`}
        />

        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    function deleteItem(
        value: CVProps['skills'][0]
    ) {
        const newValues = skills.filter((item) => item !== value)
        dispatch(setSkills(newValues));
    }

    return (
        <WrapperSection>
            <h2 className="title__section">
                Habilidades
            </h2>

            <div>
                <p>
                    Escolha 5 habilidades importantes que mostram que você se enquadra na posição. Certifique-se de que correspondam às principais habilidades mencionadas na lista de empregos (especialmente ao se inscrever por meio de um sistema online).
                </p>
                <ListCards
                    list={skills}
                    type={"skills"}
                    handleChangeList={(value) => dispatch(setSkills(value))}
                    data={(skill, index) => (
                        <Item key={index}>
                            {skill}

                            <div>
                                <button onClick={() => handleClickEdit(skill)}>
                                    <Pen size={20} />
                                </button>

                                <button onClick={() => handleOpenDelete(skill)}>
                                    <Trash size={20} color={"#cf4343"} />
                                </button>
                            </div>
                        </Item>
                    )}
                />

                {skills.length <= 0 && (
                    <p>
                        <b>Você ainda não adicionou nenhuma habilidade</b>
                    </p>
                )}

                <Button onClick={() => handleClickAdd()}>
                    Adicionar mais uma skill
                </Button>
            </div>
        </WrapperSection>
    )
}

export default Skills;
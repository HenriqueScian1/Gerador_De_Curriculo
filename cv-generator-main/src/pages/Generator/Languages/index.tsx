import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { CVProps, getLanguages, setLanguages } from "../../../store/reducers/cv.reducer";
import { setChildren, setItemEdit, setOpen } from "../../../store/reducers/modal.reducer";
import { WrapperSection, Item, Button } from "../styles";
import * as Constants from "../../../common/constants";
import AddLanguages from "./Add";
import ListCards from "../../../components/ListCards";
import { Pen, Trash } from "phosphor-react";
import ModalDelete from "../../../components/Generator/ModalDelete";
import Edit from "./Edit";

const Languages = () => {
    const languages = useAppSelector(getLanguages)
    const dispatch = useAppDispatch();

    const handleClickAdd = () => {
        const element = <AddLanguages />
        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    const handleClickEdit = (item: CVProps['languages'][0]) => {
        const element = <Edit />
        dispatch(setItemEdit(item))
        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    const handleOpenDelete = (
        item: CVProps['languages'][0]
    ) => {
        const element = <ModalDelete
            item={item}
            callback={(value) => deleteItem(value)}
            title={"Deletar Linguagem"}
            description={`<p>Tem certeza que deseja deletar <b>"${item.language}"</b>?</p>`}
        />

        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    function deleteItem(
        value: CVProps['languages'][0]
    ) {
        const newValues = languages.filter((item) => item.language !== value.language)
        dispatch(setLanguages(newValues));
    }

    return (
        <WrapperSection>
            <h2 className="title__section">
                Linguagens
            </h2>

            <div>
                {languages.length <= 0 && (
                    <p>
                        <b>Você ainda não adicionou nenhuma linguagem</b>
                    </p>
                )}

                <ListCards
                    list={languages}
                    type={"language"}
                    handleChangeList={(value) => dispatch(setLanguages(value))}
                    data={(item) => (
                        <Item>
                            <div>
                                <h4>
                                    {item.language}
                                </h4>
                                <p>
                                    ({Constants.LEVEL_LANGUAGE[item.level as keyof typeof Constants.LEVEL_LANGUAGE]})
                                </p>
                            </div>

                            <div>
                                <button onClick={() => handleClickEdit(item)}>
                                    <Pen size={20} />
                                </button>

                                <button onClick={() => handleOpenDelete(item)}>
                                    <Trash size={20} color={"#cf4343"} />
                                </button>
                            </div>
                        </Item>
                    )}
                />

                <Button onClick={() => handleClickAdd()}>
                    Adicionar nova linguagem
                </Button>
            </div>
        </WrapperSection>
    )
}

export default Languages;
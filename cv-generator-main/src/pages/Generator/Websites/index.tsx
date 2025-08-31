import { Pen, Trash } from "phosphor-react";
import ListCards from "../../../components/ListCards";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { CVProps, getWebsites, setWebsites } from "../../../store/reducers/cv.reducer";
import { setChildren, setOpen, setItemEdit } from "../../../store/reducers/modal.reducer";
import { WrapperSection, Item, Button } from "../styles";
import AddWebsites from "./Add";
import ModalDelete from "../../../components/Generator/ModalDelete";
import Edit from "./Edit";

const Websites = () => {
    const websites = useAppSelector(getWebsites)
    const dispatch = useAppDispatch();

    const handleClickAdd = () => {
        const element = <AddWebsites />
        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    const handleClickEdit = (item: CVProps['websites'][0]) => {
        const element = <Edit />
        dispatch(setItemEdit(item))
        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    const handleOpenDelete = (
        item: CVProps['websites'][0]
    ) => {
        const element = <ModalDelete
            item={item}
            callback={(value) => deleteItem(value)}
            title={"Deletar Website"}
            description={`<p>Tem certeza que deseja deletar o website <b>"${item.label}"</b>?</p>`}
        />

        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    function deleteItem(
        value: CVProps['websites'][0]
    ) {
        const newValues = websites.filter((item) => item.title !== value.label)
        dispatch(setWebsites(newValues));
    }

    return (
        <WrapperSection>
            <h2 className="title__section">
                Portfolio & Redes sociais
            </h2>

            <div>
                <p>
                    Você pode adicionar links para sites que deseja que os gerentes de contratação vejam! Talvez seja um link para seu portfólio, perfil do LinkedIn ou site pessoal
                </p>

                <ListCards
                    list={websites}
                    type={"websites"}
                    handleChangeList={(value) => dispatch(setWebsites(value))}
                    data={(item) => (
                        <Item>
                            {item.label}

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

                {websites.length <= 0 && (
                    <p>
                        <b>Você ainda não adicionou nenhum website/rede social</b>
                    </p>
                )}

                <Button onClick={() => handleClickAdd()}>
                    Adicionar mais um link
                </Button>
            </div>
        </WrapperSection>
    )
}

export default Websites;
import { Pen, Trash } from "phosphor-react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { CVProps, getProfessionalHistory, setProfessionalHistory } from "../../../store/reducers/cv.reducer";
import { setChildren, setItemEdit, setOpen } from "../../../store/reducers/modal.reducer";
import { WrapperSection, Item, Button } from "../styles";
import AddHistory from "./Add";
import ListCards from "../../../components/ListCards";
import ModalDelete from "../../../components/Generator/ModalDelete";
import Edit from "./Edit";

const ProfessionalHistory = () => {
    const professionalHistories = useAppSelector(getProfessionalHistory)
    const dispatch = useAppDispatch();

    const handleClickAdd = () => {
        const element = <AddHistory />
        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    const handleClickEdit = (item: CVProps['professionalHistory'][0]) => {
        const element = <Edit />
        dispatch(setItemEdit(item))
        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    const handleOpenDelete = (
        item: CVProps['professionalHistory'][0]
    ) => {
        const element = <ModalDelete
            item={item}
            callback={(value) => deleteItem(value)}
            title={"Deletar Histórico"}
            description={`<p>Tem certeza que deseja deletar <b>"${item.label}"</b>?</p>`}
        />

        dispatch(setChildren(element))
        dispatch(setOpen(true))
    }

    function deleteItem(
        value: CVProps['professionalHistory'][0]
    ) {
        const newValues = professionalHistories.filter((item) => item.company !== value.label)
        dispatch(setProfessionalHistory(newValues));
    }

    return (
        <WrapperSection>
            <h2 className="title__section">
                Histórico profissional
            </h2>

            <div>
                <p>
                    Mostre sua experiência relevante (últimos 10 anos). Use marcadores para anotar suas conquistas, se possível - use números/fatos (Alcançado X, medido por Y, fazendo Z).
                </p>
                {professionalHistories.length <= 0 && (
                    <p>
                        <b>Você ainda não adicionou nenhum histórico profissional</b>
                    </p>
                )}

                <ListCards
                    list={professionalHistories}
                    type={"professionalHistory"}
                    handleChangeList={(value) => dispatch(setProfessionalHistory(value))}
                    data={(history) => (
                        <Item>
                            <div>
                                <p style={{ color: "#000" }}>
                                    {history.company}
                                </p>
                                <small style={{ color: "#999" }}>
                                    {history.startDate} {" - "} {history.endDate !== "" ? history.endDate : "Atual"}
                                </small>
                            </div>

                            <div>
                                <button onClick={() => handleClickEdit(history)}>
                                    <Pen size={20} />
                                </button>

                                <button onClick={() => handleOpenDelete(history)}>
                                    <Trash size={20} color={"#cf4343"} />
                                </button>
                            </div>
                        </Item>
                    )}
                />
                <Button onClick={() => handleClickAdd()}>
                    Adicionar nova experiência
                </Button>
            </div>
        </WrapperSection>
    )
}

export default ProfessionalHistory;
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getProfessionalHistory, setProfessionalHistory } from "../../../../store/reducers/cv.reducer";
import { getItemEdit, setOpen } from "../../../../store/reducers/modal.reducer";
import { Input, TwoColumn, TextArea } from "../../styles";
import { Layout } from "./styles";

const Edit = () => {
    const [company, setCompany] = useState<string>("")
    const [position, setPosition] = useState<string>("")
    const [startDate, setStartDate] = useState<string>("")
    const [endDate, setEndDate] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const professionalHistories = useAppSelector(getProfessionalHistory)
    const itemEdit = useAppSelector(getItemEdit)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(itemEdit == null) return;

        setCompany(itemEdit.company)
        setPosition(itemEdit.position)
        setStartDate(itemEdit.startDate)
        setEndDate(itemEdit.endDate)
        setCity(itemEdit.city)
        setDescription(itemEdit.description)
    }, [itemEdit])

    const handleClose = () => {
        dispatch(setOpen(false))
    }

    const handleClickEdit = () => {
        const newData = {
            company,
            position,
            startDate,
            endDate,
            description,
            city
        }

        const values = professionalHistories.map((item) => {
            if (item.company === itemEdit.company) {
                return newData;
            }

            return item;
        })

        dispatch(setProfessionalHistory(values))
        dispatch(setOpen(false));
    }

    return (
        <Layout>
            <h1>
                Editar Experiência Profissional
            </h1>

            <TwoColumn>
                <div>
                    <label>Empresa</label>
                    <Input
                        placeholder="Empresa"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>
                <div>
                    <label>Cargo</label>
                    <Input
                        placeholder="Cargo"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </div>
            </TwoColumn>

            <div>
                <label>Cidade (Opcional)</label>
                <Input
                    placeholder="São Paulo"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>

            <TwoColumn>
                <div>
                    <label>Data Inicial</label>
                    <Input
                        placeholder="MM/AAAA"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <div>
                    <label>Data Final</label>
                    <Input
                        placeholder="MM/AAAA"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                    <small>
                        Se você ainda trabalha nessa empresa, deixe o campo "Data Final" em branco.
                    </small>
                </div>
            </TwoColumn>

            <div>
                <label>Descrição</label>
                <TextArea
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <small>
                    Descreva suas responsabilidades e conquistas. ex: "Responsável por gerenciar uma equipe de 10 pessoas"
                </small>
            </div>

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
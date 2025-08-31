import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { getProfessionalSummary, setProfessionalSummary } from "../../../store/reducers/cv.reducer";
import { WrapperSection, TextArea } from "../styles";

const ProfessionalSummary = () => {
    const professionalSummary = useAppSelector(getProfessionalSummary)
    const dispatch = useAppDispatch();

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        dispatch(setProfessionalSummary({ description: value }))
    }

    return (
        <WrapperSection>
            <h2 className="title__section">
                Resumo Profissional
            </h2>

            <div>
                <p>
                    Escreva de 2 a 4 frases curtas e enérgicas para interessar o leitor! Mencione sua função, experiência e, o mais importante, suas maiores conquistas, melhores qualidades e habilidades.
                </p>
                <TextArea
                    placeholder="Escreva um breve resumo sobre você..."
                    value={professionalSummary.description}
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
        </WrapperSection>
    )
}

export default ProfessionalSummary;
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { getHobbies, setHobbies } from "../../../store/reducers/cv.reducer";
import { WrapperSection, TextArea } from "../styles";

const Hobbies = () => {
    const hobbies = useAppSelector(getHobbies)
    const dispatch = useAppDispatch();

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        dispatch(setHobbies({ description: value }))
    }

    return (
        <WrapperSection>
            <h2 className="title__section">
                Hobbies
            </h2>

            <div>
                <p>
                    Do que você gosta?
                </p>
                <TextArea
                    placeholder="Fale sobre o que você gosta de fazer..."
                    value={hobbies.description}
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
        </WrapperSection>
    )
}


export default Hobbies;
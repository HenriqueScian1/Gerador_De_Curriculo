import { Link, useNavigate } from "react-router-dom"
import Hobbies from "./Hobbies"
import Languages from "./Languages"
import PersonalInfo from "./PersonalInfo"
import ProfessionalHistory from "./ProfessionalHistory"
import ProfessionalSummary from "./ProfessionalSummary"
import Skills from "./Skills"
import Websites from "./Websites"
import { Form, Layout, ButtonGenerate } from "./styles"
import useCVHook from "../../hooks/useCV.hook"

const Generator = () => {
    const navigate = useNavigate()
    const cv = useCVHook();

    function setLocalData(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();

        if (
            cv.personalInfo.title === ""
            || cv.personalInfo.firstName === ""
            || cv.personalInfo.lastName === ""
            || cv.personalInfo.country === ""
            || cv.professionalSummary.description === ""
            || cv.personalInfo.email === ""
        ) {
            return alert("Preencha todos os campos obrigatórios")
        }

        localStorage.setItem('curriculumVitae', JSON.stringify(cv))
        navigate('/visualizer');
    }

    return (
        <Layout>
            <Form>
                <PersonalInfo />
                <ProfessionalSummary />
                <Websites />
                <ProfessionalHistory />
                <Skills />
                <Languages />
                <Hobbies />

                <Link to="/visualizer" onClick={(e) => setLocalData(e)}>
                    <ButtonGenerate>
                        Gerar Currículo
                    </ButtonGenerate>
                </Link>
            </Form>
        </Layout>
    )
}

export default Generator
import YellowCV from "./YellowCV"
import BlueCV from "./BlueCV"
import SimpleCV from "./SimpleCV"
import CVNotFound from "./NotFound"
import { useEffect, useState } from "react"
import { setCV } from "../../store/reducers/cv.reducer"
import { useAppDispatch } from "../../store/hooks"
import useCVHook from "../../hooks/useCV.hook"
import { Layout, List, Right, Left, Header, Container } from "./style"
import { Link } from "react-router-dom"
import { CaretLeft } from "phosphor-react"

const Visualizer = () => {
    const [hasData, setHasData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [currentCV, setCurrentCV] = useState(<SimpleCV />);
    const cv = useCVHook();

    const dispatch = useAppDispatch();

    useEffect(() => {
        function getLocalData() {
            const item = localStorage.getItem('curriculumVitae')
            if (item == null) {
                return;
            }

            const data = JSON.parse(item)
            dispatch(setCV(data));
            setHasData(true);
        }

        if (cv.personalInfo.firstName === "") {
            getLocalData();
        } else {
            setHasData(true);
        }

        setLoading(false);
    }, [cv.personalInfo.firstName]);

    return (
        loading ? (
            <div>
                <h1>
                    Carregando...
                </h1>
            </div>
        ) : (
            hasData ? (
                <Layout>
                    <Header>
                        <Link to='/generator'>
                            <CaretLeft size={24} color={"#fff"} />
                            Voltar para o editor
                        </Link>
                    </Header>
                    <Container>
                        <Left>
                            <List>
                                <li>
                                    <button onClick={() => setCurrentCV(<SimpleCV />)}>
                                        <img src="https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=1.75,width=154/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg" alt="arrow" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setCurrentCV(<YellowCV />)}>
                                        <img src="https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=1.75,width=154/uploads/local_template_image/image/1826/persistent-resource/copenhagen-resume-templates.jpg" alt="arrow" />
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setCurrentCV(<BlueCV />)}>
                                        <img src="https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=1.75,width=154/uploads/local_template_image/image/441/persistent-resource/sydney-resume-templates.jpg" alt="arrow" />
                                    </button>
                                </li>
                            </List>
                        </Left>
                        <Right>
                            {currentCV}
                        </Right>
                    </Container>
                </Layout>
            ) : (
                <CVNotFound />
            )
        )
    )
}

export default Visualizer;
import { Link } from "react-router-dom"
import { Layout, Container, Button } from "./styles"

const Home = () => {
    return (
        <Layout>
            <Container>
                <p className="subtitle">
                    Gerador de currículo online e gratuito
                </p>
                <h1>
                    Crie o seu currículo profissional em poucos minutos
                </h1>
                <p className="description">
                    Com o nosso gerador de currículo online e gratuito você pode criar um currículo profissional em poucos minutos. Basta preencher os campos com as suas informações e pronto!
                </p>

                <footer>
                    <Link to="/generator">
                        <Button>
                            Criar Curriculo
                        </Button>
                    </Link>
                    <Link to="/visualizer">
                        <Button>
                            Ver Curriculo
                        </Button>
                    </Link>
                </footer>
            </Container>
        </Layout>
    )
}

export default Home
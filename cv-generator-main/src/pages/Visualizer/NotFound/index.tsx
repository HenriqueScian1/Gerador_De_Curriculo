import { Link } from "react-router-dom"
import { Layout, Container, Button } from "./styles"
import { SmileySad } from "phosphor-react"

const CVNotFound = () => {
    return (
        <Layout>
            <Container>
                <p className="subtitle">
                    Gerador de currículo online e gratuito
                </p>
                <SmileySad size={100} />
                <h1>
                    Não há dados...
                </h1>
                <p className="description">
                    Infelizmente não encontramos nenhum currículo salvo por aqui... Mas você pode tentar criar um novo agora mesmo, basta clicar no botão abaixo!
                </p>

                <footer>
                    <Link to="/generator">
                        <Button>
                            Criar Curriculo
                        </Button>
                    </Link>
                </footer>
            </Container>
        </Layout>
    )
}

export default CVNotFound
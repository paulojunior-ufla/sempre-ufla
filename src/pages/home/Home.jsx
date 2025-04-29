import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import logoUflaBranco from "../../assets/LogoUflaMonocromatica.png"
import iconeInfos from "../../assets/iconeInfosVerde.svg"
import iconeForm from "../../assets/iconeFormVerde.svg"
import iconeEmail from "../../assets/iconeEmailVerde.svg"
import beneficioWifi from "../../assets/beneficioWifi.svg"
import beneficioFerramenta from "../../assets/beneficioFerramenta.svg"
import beneficioEmail from "../../assets/beneficioEmail.svg"
import beneficioBiblioteca from "../../assets/beneficioBiblioteca.svg"
import Navbar from "../../components/navbar/Navbar.jsx"
import Rodape from "../../components/rodape/Rodape.jsx"
import Carrossel from "../../components/carrosselHome/CarrosselHome.jsx";
import "./home.css"

function Home(){

    return(
        <div className="paginaHome">
            <div className="Navbar">
                <Navbar />
            </div>
            <div className="secaoBoasVindas">
                <img id="logoUfla" src={logoUflaBranco} alt="Logo da UFLA na cor branca" />
                <p className="fraseDeBoasVindas">
                    <span className="bemVindo">Bem-vindo(a)</span> à nossa plataforma de egressos! <br />
                    Conecte-se e continue fazendo parte da nossa história.
                </p>
                <a href="https://sig.ufla.br" target="_blank" rel="noopener noreferrer">
                    <button className="entrar">Entrar</button>
                </a>
            </div>
            <div className="secaoBeneficios">
                <div className="explicacao">
                    <h2 className="tituloFerramentas">Benefícios e vantagens <br/> (em breve)</h2>
                    <p className="explicacaoBeneficios">
                    Ao se cadastrar na Plataforma de Egressos da UFLA, em breve, você<br/>
                    poderá acessar benefícios e vantagens exclusivos.
                    </p>
                    <Link to="/ferramentas-e-beneficios" className="pageBeneficios">
                        QUERO SABER MAIS...
                    </Link>
                </div>
                <Carrossel/>
            </div>
            <div className="secaoAjudaUniversidade">
                <h1>Como você ajuda a <br /> Universidade?</h1>
                <div className="perfil">
                    <img src={iconeInfos} alt="Icone de relatório" className="iconeInfos" />
                    <p><span className="titulo">Preenchendo seu perfil profissional</span> <br />
                        Compartilhe sua trajetória profissional e ajude a UFLA a avaliar e a melhorar os cursos oferecidos,
                        possibilitando que a sociedade como um todo seja beneficiada.
                    </p>
                </div>
                <div className="questionario">
                    <p>
                        <span className="titulo">Respondendo a breves questionários</span><br />Sua experiência no mercado de trabalho é fundamental para aprimorar os cursos de graduação e pós-graduação da UFLA,
                        colaborando com a melhoria constante do ensino.
                    </p>
                    <img src={iconeForm} alt="Icone de prancheta" className="iconeForm" />
                </div>
                <div className="email">
                    <img src={iconeEmail} alt="Icone de Email" className="iconeEmail" />
                    <p><span className="titulo">Mantendo suas informações de contato atualizadas</span><br />
                        Ao se cadastrar e manter seus dados atualizados, você recebará informações e novidades importantes da Universidade de forma ágil e direta.
                    </p>
                </div>
            </div>
            <div className="secaoIntegrar">
                <h1>Pronto(a) para integrar essa rede?</h1>
                <div className="botoes">
                    <a href="https://sig.ufla.br" target="_blank" rel="noopener noreferrer">
                        <button className="entrar">Entrar</button>
                    </a>
                    <Link to="/duvidas">
                        <button className="duvidas">Dúvidas?</button>
                    </Link>
                </div>
            </div>
            <div className="Rodape">
                <Rodape/>
            </div>
        </div>
    )
}

export default Home;
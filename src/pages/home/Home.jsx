import React from "react";
import logoUflaBranco from "../../assets/LogoUflaMonocromatica.png"
import fotoCapelos from "../../assets/fotodecapelos.png"
import iconeInfos from "../../assets/iconeInfos.svg"
import iconeForm from "../../assets/iconeForm.svg"
import iconeEmail from "../../assets/iconeEmail.svg"
import beneficioWifi from "../../assets/beneficioWifi.svg"
import beneficioFerramenta from "../../assets/beneficioFerramenta.svg"
import beneficioEmail from "../../assets/beneficioEmail.svg"
import beneficioBiblioteca from "../../assets/beneficioBiblioteca.svg"
import Navbar from "../../components/navbar/Navbar.jsx"
import Rodape from "../../components/rodape/Rodape.jsx"
import { Carousel } from "react-bootstrap";
//import Carrosselbeneficios from "../../components/Carrosselbeneficios.jsx"
import "./home.css"

function Home(){

    return(
        <div className="paginaHome">
            <div className="Navbar">
                <Navbar/>
            </div>
            <div className="secaoBoasVindas">
                <img id="logoUfla" src={logoUflaBranco} alt="Logo da UFLA na cor branca" />
                    <p className="fraseDeBoasVindas">
                        <span className="bemVindo">Bem-vindo(a)</span> à nossa plataforma de egressos! <br />
                        Conecte-se, inspire e continue fazendo parte da nossa história.
                    </p>
                <button className="entrar">ENTRAR</button>
            </div>
            <div className="secaoBeneficios">
                <div className="explicacao">
                <h2 className="tituloFerramentas">Ferramentas e benefícios</h2>
                    <p className="explicacaoBeneficios">
                        Ao cadastrar em nossa plataforma aproveite os benefícios exclusivos para egressos, 
                        como acesso a recursos da universidade e ferramentas que facilitam sua jornada.
                    </p>
                    <a href="/ferramentas-e-beneficios" className="pageBeneficios">CONFIRA AS FERRAMENTAS E BENEFÍCIOS</a>
                </div>
                <div className="carrosselBeneficios">
                    <Carousel id="carouselExample" className="carousel slide" interval={2000} indicators={false} controls={false}>
                        <Carousel.Item>
                            <div className="card">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152l0 264-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427L0 224c0-17.7 14.3-32 32-32l30.3 0c63.6 0 125.6 19.6 177.7 56zm32 264l0-264c52.1-36.4 114.1-56 177.7-56l30.3 0c17.7 0 32 14.3 32 32l0 203c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"/>
                                </svg>
                                <div className="card-body">
                                    <h5 className="card-title">Biblioteca Virtual</h5>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
                                </svg>
                                <div className="card-body">
                                    <h5 className="card-title">Email da Ufla</h5>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M215.4 96L144 96l-36.2 0L96 96l0 8.8L96 144l0 40.4 0 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3 48 96c0-26.5 21.5-48 48-48l76.6 0 49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48 416 48c26.5 0 48 21.5 48 48l0 44.3 22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4l0-89 0-40.4 0-39.2 0-8.8-11.8 0L368 96l-71.4 0-81.3 0zM0 448L0 242.1 217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1 512 448s0 0 0 0c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0zM176 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                                </svg>
                                <div className="card-body">
                                    <h5 className="card-title">Ferramentas Google</h5>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="secaoAjudaUniversidade">
                <h1>Como você ajuda a <br/> Universidade?</h1>
                <div className="perfil">
                    <img src={iconeInfos} alt="Icone de relatório" className="iconeInfos" />
                    <p><span className="titulo">Preencha seu perfil profissional</span> <br/>
                        Compartilhe sua trajetória profissional para ajudar a UFLA a avaliar e melhorar os cursos oferecidos, 
                        além de possibilitar que novas gerações de alunos se beneficiem com as informações coletadas.
                    </p>
                </div>
                <div className="questionario">
                    <p>
                    <span className="titulo">Participe de breves questionários</span><br/>Sua experiência no mercado de trabalho é fundamental para aprimorar os programas de graduação e pós-graduação da UFLA, 
                        colaborando com a evolução constante do ensino.
                    </p>
                    <img src={iconeForm} alt="Icone de prancheta" className="iconeForm" />
                </div>
                <div className="email">
                    <img src={iconeEmail} alt="Icone de Email" className="iconeEmail" />
                    <p><span className="titulo">Mantenha seu contato atualizado</span><br/>
                        Ao se cadastrar, seu e-mail será automaticamente atualizado, 
                        garantindo que você receba todas as informações e novidades importantes da universidade de forma ágil e direta.
                    </p>
                </div>
            </div>
            <div className="secaoIntegrar">
                <h1>Pronto(a) para integrar essa rede?</h1>
                <div className="botoes">
                    <button className="entrar">ENTRAR</button>
                    <button className="duvidas">DÚVIDAS?</button>
                </div>
            </div>
            <div className="Rodape">
                <Rodape/>
            </div>
        </div>
    )
}

export default Home;
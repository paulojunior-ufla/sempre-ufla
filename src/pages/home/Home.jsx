import React from "react";
import logoUflaBranco from "../../assets/LogoUflaMonocromatica.png"
import fotoCapelos from "../../assets/fotodecapelos.png"
import iconeInfos from "../../assets/iconeInfos.svg"
import iconeForm from "../../assets/iconeForm.svg"
import iconeEmail from "../../assets/iconeEmail.svg"
import Navbar from "../../components/navbar/Navbar.jsx"
import Rodape from "../../components/rodape/Rodape.jsx"
import Carrosselbeneficios from "../../components/Carrosselbeneficios.jsx"
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
                    <a href="/ferramentas-e-beneficios" className="pageBeneficios">CONFIRA AS FERRAMENTAS E BENEFÍCIOS -</a>
                </div>
                <div className="carrosselBeneficios">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card">
                                    <img className="card-img-top" src=".../100px180/" alt="Imagem de capa do card" />
                                    <div className="card-body">
                                        <h5 className="card-title">Biblioteca Virtual</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <img className="card-img-top" src=".../100px180/" alt="Imagem de capa do card" />
                                    <div className="card-body">
                                        <h5 className="card-title">Título do card 2</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <img className="card-img-top" src=".../100px180/" alt="Imagem de capa do card" />
                                    <div className="card-body">
                                        <h5 className="card-title">Título do card 3</h5>                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <img className="card-img-top" src=".../100px180/" alt="Imagem de capa do card" />
                                    <div className="card-body">
                                        <h5 className="card-title">Título do card 4</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
import React from "react";
import logoUflaBranco from "../../assets/LogoUflaMonocromatica.png"
import Navbar from "../../components/Navbar.jsx"
import Rodape from "../../components/Rodape.jsx"

function Home(){

    return(
        <div className="paginaHome">
            <div className="Navbar">
                <Navbar/>
            </div>
            <div className="secaoBoasVindas">
                <img src={logoUflaBranco} alt="Logo da UFLA na cor branca" />
                <p id="bemVindo">Bem-vindo(a)</p>
                <p className="fraseDeBoasVindas">
                    à nossa plataforma de egressos! 
                    Conecte-se, inspire e continue fazendo parte da nossa história.
                </p>
                <button className="entrar">ENTRAR</button>
            </div>
            <div className="secaoBeneficios">
                <h2 className="tituloFerramentas">Ferramentas e benefícios</h2>
                <p className="explicacaoBeneficios">
                    Ao cadastrar em nossa plataforma aproveite os benefícios exclusivos para egressos, 
                    como acesso a recursos da universidade e ferramentas que facilitam sua jornada.
                </p>
                <a href="/ferramentas-e-beneficios" className="pageBeneficios">CONFIRA AS FERRAMENTAS E BENEFÍCIOS -</a>
                <div className="carrosselBeneficios">
                    <div>
                        <p>Biblioteca virtual</p>
                    </div>
                </div>
            </div>
            <div className="secaoAjudaUniversidade">
                <div className="perfil">
                    <h4>Preencha seu perfil profissional</h4>
                    <p>
                        Compartilhe sua trajetória profissional para ajudar a UFLA a avaliar e melhorar os cursos oferecidos, 
                        além de possibilitar que novas gerações de alunos se beneficiem com as informações coletadas.
                    </p>
                </div>
                <div className="questionario">
                    <h4>Participe de breves questionários</h4>
                    <p>
                        Sua experiência no mercado de trabalho é fundamental para aprimorar os programas de graduação e pós-graduação da UFLA, 
                        colaborando com a evolução constante do ensino.
                    </p>
                </div>
                <div className="contato">
                    <h4>Mantenha seu contato atualizado</h4>
                    <p>
                        Ao se cadastrar, seu e-mail será automaticamente atualizado, 
                        garantindo que você receba todas as informações e novidades importantes da universidade de forma ágil e direta.
                    </p>
                </div>
            </div>
            <div className="secaoIntegrar">
                <h1>Pronto(a) para integrar essa rede?</h1>
                <button className="entrar">ENTRAR</button>
                <button className="duvidas">DÚVIDAS?</button>
            </div>
            <div className="Rodape">
                <Rodape/>
            </div>
        </div>
    )
}

export default Home;
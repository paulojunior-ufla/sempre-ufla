import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx"
import Rodape from "../../components/rodape/Rodape.jsx"
import iconeCelular from "../../assets/iconeCelularAzul.png"
import iconeFerramentas from "../../assets/iconeFerramentasAzul.png"
import iconeEmail from "../../assets/iconeEmailAzul.png"
import iconeWifi from "../../assets/iconeWifiAzul.png"
import "./ferramentasBeneficios.css"

function FerramentasBeneficios(){

    return(
        <div className="paginaFerramentasBeneficios">
            <div className="Navbar">
                <Navbar/>
            </div>
            <div className="secaoApresentacao">
                <h1>Benefícios e vantagens (em breve)</h1>
                <p className="apresentacao">
                Exclusivo para egressos(as) que permanecem conectados à UFLA 
                por meio da Plataforma de Egressos e mantêm seus dados atualizados.
                </p>
            </div>
            <div className="secaoBeneficios">
                <h1>Confira os benefícios e vantagens</h1>
                <div className="infosBeneficios">
                    <div className="biblioteca">
                        <img src={iconeCelular} alt="Icone de um celular" className="iconeCelular"/>
                        <h3>Acesso ao acervo virtual da biblioteca</h3>
                        <p className="explicacaoBiblioteca">
                        Acesso ao acervo virtual da Biblioteca da UFLA, com uma 
                        vasta gama de materiais acadêmicos, pesquisas e recursos 
                        para apoiar sua contínua aprendizagem e desenvolvimento profissional. 
                        </p>
                    </div>
                    <div className="email">
                        <img src={iconeEmail} alt="Icone de uma carta representando um email" className="iconeEmail" />
                        <h3>Email personalizado @egressos.ufla.br</h3>
                        <p className="explicacaoEmail">
                        Um e-mail personalizado @egressos.ufla.br, que comprova sua 
                        conexão com a universidade, acesso a serviços e ferramentas 
                        da UFLA.
                        </p>
                    </div>
                    <div className="ferramentas">
                        <img src={iconeFerramentas} alt="Icone de uma engrenagem junto a uma guia de navegador" className="iconeFerramentas" />
                        <h3>Acesso às ferramentas do Google Suíte</h3>
                        <p className="explicacaoFerramentas">
                        Você terá acesso completo às ferramentas do Google Suíte, como 
                        Gmail, Google Drive, Docs, Sheets e outras, que ajudam a aprimorar 
                        sua organização, colaboração e produtividade nas atividades profissionais e acadêmicas.
                        </p>
                    </div>
                    <div className="wifi">
                        <img src={iconeWifi} alt="Icone de sinal de Wi-fi" className="iconeWifi" />
                        <h3>Wifi da UFLA</h3>
                        <p className="explicacaoWifi">
                        Você terá acesso ao Wi-Fi da UFLA, garantindo conectividade rápida
                        e segura em todo o campus, facilitando o acesso a recursos online 
                        e a comunicação com a universidade de maneira eficiente.
                        </p>
                    </div>
                </div>
            </div>
            <div className="secaoEntreja">
                <h1>Em breve, você terá acesso a todos esses benefícios...</h1>
                <a href="https://sig.ufla.br" target="_blank" rel="noopener noreferrer">
                    <button className="entrar">Entrar</button>
                </a>
            </div>
            <div className="rodape">
                <Rodape/>
            </div>
        </div>
    )
}

export default FerramentasBeneficios;
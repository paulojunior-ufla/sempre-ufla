import "./rodape.css"

function Rodape(){

    return(
        <footer className="rodape">
            <div className="informacoes">
                <div className='redesSociais'>
                    <h3>Nos siga</h3>
                    <p>@redesocial</p>
                    <p>@redesocial</p>
                </div>
                <div className="explorar">
                    <h3>Explorar</h3>
                    <a href="/ferramentas-e-beneficios">Ferramentas e benéficios</a>
                    <a href="#">Dúvidas</a>
                    <a href="LINK DA PLATAFORMA NO SIG">Entrar</a>
                </div>
                <div className="contato">
                    <h3>Contato</h3>
                    <p>proeec@ufla.br</p>
                    <p> (99) 9 9999-9999</p>
                </div>
                <div className="creditos">
                    <p>Copyright &copy; 2025 Sempre UFLA <stand id='criador'>By Universidade Federal de Lavras</stand></p>
                </div>
            </div>
        </footer>
    )
}

export default Rodape;
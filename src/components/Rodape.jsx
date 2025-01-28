function Rodape(){

    return(
        <footer className="rodape">
            <div className='redesSociais'>
                <h3>Nos siga</h3>
                <p>@redesocial</p>
                <p>@redesocial</p>
            </div>
            <div className="explorar">
                <h3>Explorar</h3>
                <a href="#">Ferramentas e benéficios</a>
                <a href="#">Dúvidas</a>
                <a href="LINK DA PLATAFORMA NO SIG">Entrar</a>
            </div>
            <div className="contato">
                <h3>Contato</h3>
                <p><i className="fas fa-envelope"></i> proeec@ufla.br</p>
                <p> <i className="fas fa-phone"></i> (99) 9 9999-9999</p>
            </div>
            <div className="creditos">
                <p>Copyright &copy; 2025 Sempre UFLA</p>
                <p id='criador'>By Universidade Federal de Lavras</p>
            </div>
        </footer>
    )
}

export default Rodape;
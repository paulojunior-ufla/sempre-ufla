import "./rodape.css"
import { Link } from "react-router-dom";

function Rodape(){

    return(
        <footer className="rodape">
            <div className="informacoes">
                <div className='redesSociais'>
                    <h3>Nos siga</h3>
                    <p>@proeecufla</p>
                    <p>@uflabr</p>
                </div>
                <div className="explorar">
                    <h3>Explorar</h3>
                    <Link to="/">Home</Link>
                    <Link to="/ferramentas-e-beneficios">Ferramentas e benéficios</Link>
                    <Link to="/duvidas">Dúvidas</Link>
                    <a href="https://sig.ufla.br" target="_blank" rel="noopener noreferrer">Entrar</a>
                </div>
                <div className="contato">
                    <h3>Contato</h3>
                    <p>egressos.proeec@ufla.br</p>
                    <p>(35) 3829-1212</p>
                </div>
                <div className="creditos">
                    <p>Copyright &copy; 2025 Sempre UFLA <stand id='criador'>By Universidade Federal de Lavras</stand></p>
                </div>
            </div>
        </footer>
    )
}

export default Rodape;
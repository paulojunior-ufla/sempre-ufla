import logoEgressos from "../../assets/logo.png"
import logoUfla from "../../assets/LogoUflaColorida.png"
import "./navbar.css"

function Navbar (){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                
                <a class="navbar-brand" href="#">
                    <img className="navbar-brand" src={logoUfla} alt="Logo da UFLA colorida" />
                    <img className="navbar-brand" src={logoEgressos} alt="Logo da Sempre Ufla" />
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav justify-content-end w-100">
                        <a class="nav-item nav-link active" href="#">HOME <span class="sr-only">(Página atual)</span></a>
                        <a class="nav-item nav-link" href="#">FERRAMENTAS E BENEFÍCIOS</a>
                        <a class="nav-item nav-link" href="#">DÚVIDAS</a>
                        <a class="nav-item nav-link" href="#">ENTRAR</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
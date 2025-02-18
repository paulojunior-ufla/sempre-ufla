import { NavLink } from "react-router-dom"; // Importa o NavLink
import logoEgressos from "../../assets/logo.png";
import logoUfla from "../../assets/LogoUflaColorida.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="navbar-brand" src={logoUfla} alt="Logo da UFLA colorida" />
                    <img className="navbar-brand" src={logoEgressos} alt="Logo da Sempre Ufla" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav w-100 justify-content-end">
                        <NavLink exact to="/" className="nav-item nav-link" activeClassName="active">
                            HOME
                        </NavLink>
                        <NavLink to="/ferramentas-e-beneficios" className="nav-item nav-link" activeClassName="active">
                            FERRAMENTAS E BENEFÍCIOS
                        </NavLink>
                        <a className="nav-item nav-link" href="#">DÚVIDAS</a>
                        <a className="nav-item nav-link" href="#">ENTRAR</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

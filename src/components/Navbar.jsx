import logoEgressos from "../assets/logoEgressos.svg"
import logoUfla from "../assets/LogoUflaColorida.png"

function Navbar (){
    return(
        <div className="navbar">
            <div className="logos">
                <img src={logoUfla} alt="Logo da UFLA colorida" />
                <img src={logoEgressos} alt="Logo da plataforma de egressos" />
            </div>
            <ul className="navLinks">
                <a href="#">HOME</a>
                <a href="#">FERRAMENTAS E BENEFÍCIOS</a>
                <a href="#">DÚVIDAS</a>
                <a href="/*LINK PRA PLATAFORMA NO SIG*/">ENTRAR</a>
            </ul>
        </div>
    )
}

export default Navbar;
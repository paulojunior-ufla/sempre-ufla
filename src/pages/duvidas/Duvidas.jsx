import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx"
import Rodape from "../../components/rodape/Rodape.jsx"
import "./duvidas.css"

function Duvidas(){

    return(
        <div className="paginaDuvidas">
            <div className="Navbar">
                <Navbar/>
            </div>
            <div className="secaoApresentacao">
                <h1>Principais dúvidas</h1>
            </div>
            <div className="secaoDuvidas">
                <h1>Dúvidas:</h1>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Como posso acessar a plataforma de egressos PLAEG?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                Você pode acessar a plataforma de egressos PLAEG por meio do sistema acadêmico da UFLA (SIG), disponível em https://sig.ufla.br/. Para utilizar todos os recursos, basta fazer login com suas credenciais e acessar o menu “Perfil do Egresso”.                        
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Quais informações a UFLA coleta e como elas são utilizadas?
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                A UFLA coleta informações básicas, como nome, curso, ano de conclusão e dados de contato, além de informações sobre sua trajetória profissional. Esses dados são utilizados para manter a rede de egressos ativa e apoiar a melhoria da qualidade dos cursos da instituição. Para mais informações sobre esse assunto, acesse o Termo de Consentimento de Uso de Dados Pessoais, disponível na plataforma de egressos PLAEG.                        
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Quem pode se cadastrar na plataforma de egressos PLAEG?
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                Todos os ex-alunos da UFLA podem se cadastrar, independentemente do curso ou ano de formação. A plataforma é voltada tanto para graduados quanto para pós-graduados da instituição.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Há algum custo para se cadastrar na plataforma de egressos PLAEG?
                        </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                Não, o cadastro é totalmente gratuito. Além disso, há benefícios para os ex-alunos cadastrados na plataforma de egressos PLAEG (ver pergunta “Quais benefícios terei ao me cadastrar na plataforma de egressos PLAEG?”).
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Quais benefícios terei ao me cadastrar?
                        </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse">
                            <div class="accordion-body">
                            Ao se cadastrar na plataforma de egressos PLAEG, você poderá ter acesso a diversos benefícios, como eventos e cursos de capacitação, networking com outros egressos, uma conta de email @egressos.ufla.br, acesso ao acervo virtual da Biblioteca UFLA, ao pacote de aplicativos Google (GSuíte) e à rede Wi-Fi da UFLA.                        
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Com que frequência preciso atualizar meu cadastro?
                        </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                Não há uma frequência obrigatória, mas recomendamos que você revise suas informações sempre que houver mudanças significativas, como troca de emprego, conclusão de um novo curso ou atualização de dados de contato. Manter seu cadastro atualizado é importante para que a UFLA possa oferecer conteúdos e oportunidades alinhadas ao seu perfil profissional.                        
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        A plataforma PLAEG oferece oportunidades de networking entre egressos?
                        </button>
                        </h2>
                        <div id="collapseSeven" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                Sim! A plataforma permite que um egresso busque informações sobre seus colegas de curso, o que pode ajudar na criação de uma rede de contatos valiosa para troca de experiências, indicações e oportunidades no mercado de trabalho.                            
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            Existe algum meio de contato caso eu tenha dúvidas ou problemas com meu cadastro?
                        </button>
                        </h2>
                        <div id="collapseEight" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                Sim! Caso tenha qualquer dúvida ou problema, você pode entrar em contato com a Assessoria de Egressos da Pró-Reitoria de Extensão, Esporte e Cultura (PROEEC) por meio do e-mail egressos.proeec@ufla.br ou do telefone (35) 3829-1212.                            
                            </div>
                        </div>
                    </div>
                    <p className="contatoDuvida">
                    Sua dúvida não está aqui? Fale conosco pelo e-mail <stand className="meioContato">egressos.proeec@ufla.br</stand> ou telefone <stand className="meioContato">(35) 3829-1212.</stand>
                    </p>
                </div>
            </div>
            <div className="Rodape">
                <Rodape/>
            </div>
        </div>
    )
}

export default Duvidas;
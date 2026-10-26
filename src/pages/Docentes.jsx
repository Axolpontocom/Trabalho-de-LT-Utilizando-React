import Base from "../Base";
import {CardsDocente} from "./Cards"; 
import './Docentes.css'
import Docente1 from "../assets/Docentes/Docente1.jfif"
import Docente2 from "../assets/Docentes/Docente2.webp"
import Docente3 from "../assets/Docentes/Docente3.jpg"
import Docente4 from "../assets/Docentes/Docente4.webp"
import Docente5 from "../assets/Docentes/Docente5.jfif"
import Docente6 from "../assets/Docentes/Docente6.jfif"

const listaLinks = [

    {name:"Inicio",link:""},
    {name:"Campus",link:"campus"},
    {name:"Metodologia",link:"Metodologia"},
    {name:"Formulário",link:"formulario"},
    {name:"Info",link:"Info"}

]

function Docentes() {
    return (
        <Base listaButtom={listaLinks} >
            <CardsDocente imagem={Docente1}
            nome={" Abdul Alhazred, O Arabe Louco"}
            descricao={"Autor do temível Al Azif (o Necronomicon), ele ensina lógica de programação usando encantamentos que fazem sua mente estilhaçar em dimensões desconhecidas. Se você não entender ponteiros em C, ele garante que você enlouquecerá antes da prova final."}
            />
            <CardsDocente imagem={Docente2}
            nome={"Azathoth, O sultão demonio"}
            descricao={"O centro caótico do universo e professor titular de Arquitetura de Computadores. Ele dorme no fundo da sala embalado por flautas demoníacas; se alguém fizer barulho e acordá-lo, o cosmos inteiro deixa de existir — junto com o seu semestre letivo."}
            />
            <CardsDocente imagem={Docente3}
            nome={"Cthulhu, O que descansa em R'lyeh"}
            descricao={"Especialista em Banco de Dados e Criptografia Subaquática. Suas aulas são tão profundas que causam insanidade temporária. Ele insiste que o modelo relacional foi escrito em bas-relíquia nas paredes de cidades ciclópicas afundadas."}
            />
            <CardsDocente imagem={Docente4}
            nome={" Hastur, O inominável"}
            descricao={"O docente cuja matéria não deve ser nomeada (muito menos reprovada). Dizem que olhar fixamente para a nota dele na média final causa desespero existencial. Suas listas de exercícios vêm direto das margens do lago de Hali."}
            />
            <CardsDocente imagem={Docente5}
            nome={"Henzo Satanas Silva"}
            descricao={"Com uma massa gravitacional tão densa que distorce o próprio espaço-tempo do IFerno e absorve qualquer luz ao redor, Henzo consome bugs (e lanches inteiros) com a mesma voracidade com que devora a sua paciência. Se a gravidade dele te puxar para a sala dele, reze para que sobre um pedaço da sua média."}
            />
            <CardsDocente imagem={Docente6}
            nome={" Patolino, O Mago Implacável"}
            descricao={"O verdadeiro arquiteto do caos absoluto. Mestre em Engenharia de Software voltada para trapaças e desespero alheio. Ele vai transformar a sua vida acadêmica em um desenho animado de terror psicológico onde você é sempre o alvo da bigorna caindo."}
            />

       
        </Base>
        
    );
}

export default Docentes;
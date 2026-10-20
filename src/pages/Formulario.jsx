import Base from "../Base";
import {useState} from "react";
import DadosPessoais from "./CampoForm/DadosPessoais";
import DadosAdicionais from "./CampoForm/DadosAdicionais";
import DadosContato from "./CampoForm/DadosContato";
import DadosDocumentação from "./CampoForm/DadosDocumentação";
import './Formulario.css'
function Formulario() {

const [nomeAluno, setNomeAluno] = useState("");
const [cpfAluno, setCpfAluno] = useState("");
const [nomeResponsavel, setNomeResponsavel] = useState("");
const [cpfResponsavel, setCpfResponsavel] = useState("");
const [idadeAluno, setIdadeAluno] = useState("");
const [dataNascimento, setDataNascimento] = useState("");
const [sexoAluno, setSexoAluno] = useState("");
const [identidadeAluno, setIdentidadeAluno] = useState("");
const [boletimAluno, setBoletimAluno] = useState("");
const [identidadeResponsavel, setIdentidadeResponsavel] = useState("");
const [telefone1, setTelefone1] = useState("");
const [telefone2, setTelefone2] = useState("");
const [emailResponsavel, setEmailResponsavel] = useState("");
const [emailAluno, setEmailAluno] = useState("");
const [atividades, setAtividades] = useState([]);
const [cidade, setCidade] = useState("");
const [endereco, setEndereco] = useState("");
const [bairro, setBairro] = useState("");
const [rua, setRua] = useState("");
const [numero, setNumero] = useState("");

    const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", nomeAluno, cpfAluno, nomeResponsavel, cpfResponsavel, idadeAluno, dataNascimento, sexoAluno, identidadeAluno, boletimAluno, identidadeResponsavel, telefone1, telefone2, emailResponsavel, emailAluno, atividades, cidade, endereco, bairro, rua, numero);
} 

    return (
        <Base>
                <form className="formulario" onSubmit={HandleSubmit}>
                <DadosPessoais 
                    nomeAluno={nomeAluno} setNomeAluno={setNomeAluno}
                    cpfAluno={cpfAluno} setCpfAluno={setCpfAluno}
                    nomeResponsavel={nomeResponsavel} setNomeResponsavel={setNomeResponsavel}
                    cpfResponsavel={cpfResponsavel} setCpfResponsavel={setCpfResponsavel}
                    idadeAluno={idadeAluno} setIdadeAluno={setIdadeAluno}
                    dataNascimento={dataNascimento} setDataNascimento={setDataNascimento}
                    sexoAluno={sexoAluno}  setSexoAluno={setSexoAluno}
                    
                />
                <DadosAdicionais 
                    atividades={atividades} setAtividades={setAtividades}
                    cidade={cidade} setCidade={setCidade}
                    endereco={endereco} setEndereco={setEndereco}
                    bairro={bairro} setBairro={setBairro}
                    rua={rua} setRua={setRua}
                    numero={numero} setNumero={setNumero}
                />
                <DadosContato 
                    telefone1={telefone1} setTelefone1={setTelefone1}
                    telefone2={telefone2} setTelefone2={setTelefone2}
                    emailResponsavel={emailResponsavel} setEmailResponsavel={setEmailResponsavel}
                    emailAluno={emailAluno} setEmailAluno={setEmailAluno}
                />
                <DadosDocumentação 
                    identidadeAluno={identidadeAluno} setIdentidadeAluno={setIdentidadeAluno}
                    boletimAluno={boletimAluno} setBoletimAluno={setBoletimAluno}
                    identidadeResponsavel={identidadeResponsavel} setIdentidadeResponsavel={setIdentidadeResponsavel}
                
                />
                <button className="form" type="submit">Cadastrar</button>
            </form>    

        </Base>
    )
}

export default Formulario;
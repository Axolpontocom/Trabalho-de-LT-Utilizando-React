import Base from "../Base";
import './Metodologia.css'
import {CardsEnsino} from "./Cards"; 


const listaLinks = [

    {name:"Inicio",link:""},
    {name:"Campus",link:"campus"},
    {name:"Docentes",link:"docentes"},
    {name:"Formulário",link:"formulario"},
    {name:"Info",link:"Info"}
]

function Metodologia(){

    return(
        <Base listaButtom={listaLinks} >
        
        <CardsEnsino textobase={"Porque"} textooculto={"Rituais"} descoculta={"Aulas práticas de sacrificio e blasfêmias integradas ao Ensino Médio."} />
        <CardsEnsino textobase={"Estudar"} textooculto={"Orações"} descoculta={"Oportunidades de contactar entidades do mais obscuro cosmos para barganhar uma bolsa de estudo"} />
        <CardsEnsino textobase={"Conosco"} textooculto={"Sacerdotes Qualificados"} descoculta={"Mestres dos horrores, detentores dos mais repugnantes conhecimentos ja descobertos"} />
        
        
        </Base>




    );


};

export default Metodologia;
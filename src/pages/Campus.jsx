import Base from "../Base";
import './Campus.css'
import Cards from "./Cards";
import campus1 from "../assets/Campus/campus1.jpg"
import campus2 from "../assets/Campus/campus2.jfif"
import campus3 from "../assets/Campus/campus3.jfif"

    
const listaLinks = [

    {name:"Inicio",link:""},
    {name:"Docentes",link:"docentes"},
    {name:"Metodologia",link:"Metodologia"},
    {name:"Formulário",link:"formulario"},
    {name:"Info",link:"Info"}
]

function Campus() {
    return (
         <Base listaButtom={listaLinks} >
                <section className="campus-section">
                <Cards imagem={campus1} variant="campus" />
               
            </section>
            <section className="campus-section">
                <Cards imagem={campus2} variant="campus" />
                
            </section>
            <section className="campus-section">
                <Cards imagem={campus3} variant="campus" />
                
            </section>
        
        </Base>
    )
};

export default Campus;
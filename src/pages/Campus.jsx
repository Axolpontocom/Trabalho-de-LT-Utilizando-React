import Base from "../Base";
import './Campus.css'
import Cards from "./Cards";
import imagemGenerica from "../assets/imagemGenerica.jfif"
    
function Campus() {
    return (
         <Base>
                <section className="campus-section">
                <Cards imagem={imagemGenerica} variant="campus" />
               
            </section>
            <section className="campus-section">
                <Cards imagem={imagemGenerica} variant="campus" />
                
            </section>
            <section className="campus-section">
                <Cards imagem={imagemGenerica} variant="campus" />
                
            </section>
        
        </Base>
    )
};

export default Campus;
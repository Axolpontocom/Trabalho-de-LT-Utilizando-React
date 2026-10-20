import Base from "../Base";
import './Campus.css'
import Cards from "./Cards";
function Campus() {
    return (
         <Base>
                <section className="campus-section">
                <Cards imagem={"/imagemGenerica.jfif"} variant="campus" />
               
            </section>
            <section className="campus-section">
                <Cards imagem={"/imagemGenerica.jfif"} variant="campus" />
                
            </section>
            <section className="campus-section">
                <Cards imagem={"/imagemGenerica.jfif"} variant="campus" />
                
            </section>
        
        </Base>
    )
};

export default Campus;
import Base from "../Base";
import './Campus.css'
import Cards from "./Cards";
import campus1 from "../assets/Campus/campus1.jpg"
import campus2 from "../assets/Campus/campus2.jfif"
import campus3 from "../assets/Campus/campus3.jfif"

    
function Campus() {
    return (
         <Base>
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
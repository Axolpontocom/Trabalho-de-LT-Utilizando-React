import Base from "../Base";
import Cards from "./Cards";
import './Inicial.css'

function Inicial() {
    return (
        <Base>
                <section className="inicio-section">
                <a href="/" className="inicio-link"><Cards imagem={"/imagemGenerica.jfif"} variant="inicio" /></a>
                <a href="/docentes" className="inicio-link"><Cards imagem={"/imagemGenerica.jfif"} variant="inicio" /></a>
            </section>
            <section className="inicio-section">
                <a href="/campus" className="inicio-link"><Cards imagem={"/imagemGenerica.jfif"} variant="inicio" /></a>
                <a href="/formulario" className="inicio-link"><Cards imagem={"/imagemGenerica.jfif"} variant="inicio" /></a>
            </section>
        
        </Base>
    );
}

export default Inicial;
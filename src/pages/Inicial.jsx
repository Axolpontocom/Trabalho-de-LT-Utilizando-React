import Base from "../Base";
import Cards from "./Cards";
import imgPag1 from "../assets/Inicial/imgPag1.jfif"
import imgPag2 from "../assets/Inicial/imgPag2.jfif"
import imgPag3 from "../assets/Inicial/imgPag3.jfif"
import imgPag4 from "../assets/Inicial/imgPag4.webp"

import './Inicial.css'

function Inicial() {
    return (
        <Base>
            <section className="inicio-section">
                <a href="/campus" className="inicio-link"><Cards imagem={imgPag1} variant="inicio" legenda={<h5>Conheça um pouco do campus</h5>} /></a>
                <a href="/docentes" className="inicio-link"><Cards imagem={imgPag2} variant="inicio" legenda={<h5>Conheça os nossos professores</h5>} /></a>
            </section>
            <section className="inicio-section">
                <a href="/" className="inicio-link"><Cards imagem={imgPag3} variant="inicio" legenda={<h5>Conheça nossa metodologia</h5>}/></a>
                <a href="/formulario" className="inicio-link"><Cards imagem={imgPag4} variant="inicio" legenda={<h5>Matricule-se, já!</h5>}/></a>
            </section>

        </Base>
    );
}

export default Inicial;
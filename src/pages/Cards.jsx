
function Cards({ imagem, variant, legenda, tam}) {
    return (
        <article className={`${variant}-card`}>
            <figure className={`${variant}-figure`}>
                <img className={`${variant}-image`} src={imagem} alt="Imagem 1" />
                <figcaption className={`${variant}-text`}>
                    {legenda}
                </figcaption>
            </figure>
        </article>

    )
}

function CardsDocente({imagem, nome, descricao}) {
    return (
         <article className="docente-card">
            <figure className="docente-figure">
              <img className="docente-image" src={imagem} alt={"Foto do docente " + nome} />
            </figure>

            <div className="teacher-info">
                <h3>{nome}</h3>

              <p className="docente-description">
                {descricao}
              </p>
            </div>
          </article>

    )
}

export default Cards;
export { CardsDocente };
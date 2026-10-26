
function Cards({ imagem, variant, legenda}) {
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


function CardsEnsino({textobase, textooculto, descoculta}){

    return( 
    
    <article className="curtain-card">
      
      {/* Conteúdo Base (Frente) */}
      <section className="card-base-content">
          <h2>{textobase}</h2>
      </section>

      {/* Conteúdo Revelado (Cortina que desliza) */}
      <section className="card-curtain-content">
          <h2>{textooculto}</h2>
          <p>{descoculta}</p>
      </section>

    </article>
    );


}

export default Cards;
export { CardsDocente };
export { CardsEnsino };
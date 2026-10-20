import './Base.css'

function Base({children}) {
    return (
   <>
        <header className="base-header">
            <h1 style={{color: 'rgb(240, 255, 240)', fontSize: '50px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', textAlign: 'center', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                <a href="/" className="btn-aside">IFerno</a>
            </h1>
        </header>
     <div className="base-container">
        <aside className="base-aside">
            <nav>
                <ul className="base-nav-list">
                    <a href="/" className="btn-aside"><li className="base-nav-item">Inicio</li></a>
                    <a href="/Docentes" className="btn-aside"><li className="base-nav-item">Docentes</li></a>
                    <a href="/Formulario" className="btn-aside"><li className="base-nav-item">Formulário</li></a>
                    <a href="/Campus" className="btn-aside"><li className="base-nav-item">Campus</li></a>
                </ul>
            </nav>
        </aside>
        <main className="base-main">
            {children}
        </main>
       
        </div>
    </>
)

}

export default Base;
import './Base.css'
import Logo from './assets/Logo.png'
import Info from './assets/info.svg'
function Base({children, listaButtom = []}) {
    return (
   <>
        <header className="base-header">
         <a href="/" className="LinkHeader">
          <img className='Logo' src={Logo} alt='Logo' style={{width:'20%'}}></img>
            <h1 className="TextoBase" style={{fontSize: '50px'}}>
               IFerno
            </h1>
            </a>
            <h2 className='TextoBase'style={{fontSize: '25px'}}>Inferno Federal de ciencia e tecnologia</h2>
         <a href="/Info" className="LinkHeader">
            <img className='Info' src={Info} alt='Info'></img>
         </a>
        </header>
     <div className="base-container">
        <aside className="base-aside">
            <nav>
                <ul className="base-nav-list">
                    {listaButtom.map((item,index)=>(
                    <a key={index}  href={`/${item.link}`} className="btn-aside"><li className="base-nav-item">{item.name}</li></a>
                        ))}
               
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
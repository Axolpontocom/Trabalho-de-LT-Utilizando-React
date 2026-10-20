

function DadosAdicionais({ atividades, setAtividades, cidade, setCidade, endereco, setEndereco, bairro, setBairro, rua, setRua, numero, setNumero }) {

  return (

<>
<label>Atividades interdiciplinares </label><br />
              <input className="form" type="checkbox" value={atividades} onChange={(e) => setAtividades(e.target.value)} /><label>Futsal</label><br />
              <input className="form" type="checkbox" value={atividades} onChange={(e) => setAtividades(e.target.value)} /><label>Jiu-Jitsu</label
              ><br />
              <input className="form" type="checkbox" value={atividades} onChange={(e) => setAtividades(e.target.value)} /><label>Xadrez</label><br />
              <input className="form" type="checkbox" value={atividades} onChange={(e) => setAtividades(e.target.value)} /><label>Handebol</label
              ><br />
              <input className="form" type="checkbox" value={atividades} onChange={(e) => setAtividades(e.target.value)} /><label>Atletismo</label
              ><br />
              <input className="form" type="checkbox" value={atividades} onChange={(e) => setAtividades(e.target.value)} /><label>Musica</label
              ><br /><br />
              <label>Cidade</label><br />
              <select className="form" value={cidade} onChange={(e) => setCidade(e.target.value)} required>
                <option>Salvador</option>
                <option>Camaçari</option>
                <option>Santo Amaro</option>
                <option>Feira de Santana</option></select
              ><br /><br />
              <label>Endereço</label><br />
              <input
                className="form"
                type="text"
                placeholder="CEP"
                maxlength="9"
                pattern="[0-9]{5}-[0-9]{3}"
                required
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              /><br /><br />
              <input
                className="form"
                type="text"
                placeholder="Bairro"
                required
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              /><br /><br />
              <input
                className="form"
                type="text"
                placeholder="Rua"
                required
                value={rua}
                onChange={(e) => setRua(e.target.value)}
              /><br /><br />
              <input className="form" type="number" placeholder="Número" required value={numero} onChange={(e) => setNumero(e.target.value)} />
              <br /><br />



</>
)
}

export default DadosAdicionais;

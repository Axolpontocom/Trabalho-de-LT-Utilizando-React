

function DadosContato({ telefone1, setTelefone1, telefone2, setTelefone2, emailResponsavel, setEmailResponsavel, emailAluno, setEmailAluno }) {
  

  return (
    <>
    <h4>Contato</h4>
                  <br />
                  <label>Telefone 1 </label><br />
                  <input
                    className="form"
                    type="tel"
                    placeholder="(00) 0000-0000"
                    required
                    value={telefone1}
                    onChange={(e) => setTelefone1(e.target.value)}
                  /><br /><br />
                  <label>Telefone 2 </label><br />
                  <input
                    className="form"
                    type="tel"
                    placeholder="(00) 0000-0000"
                    value={telefone2}
                    onChange={(e) => setTelefone2(e.target.value)}
                  /><br /><br />
                  <label>Email do Responsável</label><br></br>
                  <input
                    className="form"
                    type="email"
                    placeholder="exemplo@exemplo.com"
                    required
                    value={emailResponsavel}
                    onChange={(e) => setEmailResponsavel(e.target.value)}
                  /><br /><br />
                  <label>Email do Aluno</label><br></br>
                  <input
                    className="form"
                    type="email"
                    placeholder="exemplo@exemplo.com"
                    required
                    value={emailAluno}
                    onChange={(e) => setEmailAluno(e.target.value)}
                  /><br /><br />
    </>
  )
}

export default DadosContato;
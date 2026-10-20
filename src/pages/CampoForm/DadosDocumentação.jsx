 
function DadosDocumentação({ identidadeAluno, setIdentidadeAluno, boletimAluno, setBoletimAluno, identidadeResponsavel, setIdentidadeResponsavel }) {
  

    return (
        <>
        <h4>Documentação</h4>
              <br />

              <label>Indentidade do Aluno</label><br />
              <input type="file" required value={identidadeAluno} onChange={(e) => setIdentidadeAluno(e.target.value)} /><br /><br />
              <label>Boletim do Aluno</label><br />
              <input type="file" required value={boletimAluno} onChange={(e) => setBoletimAluno(e.target.value)} /><br /><br />
              <label>Indentidade do Responsável</label><br />
              <input type="file" required value={identidadeResponsavel} onChange={(e) => setIdentidadeResponsavel(e.target.value)} /><br /><br />

        </>
    )
}
export default DadosDocumentação;
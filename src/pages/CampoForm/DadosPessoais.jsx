
function DadosPessoais({ nomeAluno, setNomeAluno, cpfAluno, setCpfAluno, nomeResponsavel, setNomeResponsavel, cpfResponsavel, setCpfResponsavel, idadeAluno, setIdadeAluno, dataNascimento, setDataNascimento, sexoAluno, setSexoAluno }) {



return (
<>
    <label>Nome do Aluno</label><br />
              <input
                className="form"
                type="text"
                size="30"
                required
                placeholder="Digite o nome completo"
                value={nomeAluno}
                onChange={(e) => setNomeAluno(e.target.value)}
              /><br /><br />
              <label>CPF do Aluno</label><br />
              <input
                className="form"
                type="text"
                pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                maxlength="14"
                required
                placeholder="000.000.000-00"
                value={cpfAluno}
                onChange={(e) => setCpfAluno(e.target.value)}
              /><br /><br />
              <label>Nome do Responsável</label><br />
              <input
                className="form"
                type="text"
                size="30"
                required
                placeholder="Digite o nome completo"
                value={nomeResponsavel}
                onChange={(e) => setNomeResponsavel(e.target.value)}
              /><br /><br />
              <label>CPF do Responsável</label><br />
              <input
                className="form"
                type="text"
                pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                maxlength="14"
                required
                placeholder="000.000.000-00"
                value={cpfResponsavel}
                onChange={(e) => setCpfResponsavel(e.target.value)}
              /><br /><br />
              <label>Idade do Aluno</label><br />
              <input
                className="form"
                type="number"
                min="0"
                max="100"
                required
                value={idadeAluno}
                onChange={(e) => setIdadeAluno(e.target.value)}
              /><br /><br />
              <label>Data de nascimento do aluno</label><br />
              <input className="form" type="date" required  value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} /><br /><br />
              <label>Sexo do aluno</label><br />
              <input type="radio" name="sexo" required  value="masculino" onChange={(e) => setSexoAluno(e.target.value)} /><label>Masculino</label
              ><br />
              <input type="radio" name="sexo" required value="feminino" onChange={(e) => setSexoAluno(e.target.value)} /><label>Feminino</label
              ><br />
              <input type="radio" name="sexo" required value="outros" onChange={(e) => setSexoAluno(e.target.value)} /><label>Outros</label>
              <input
                className="form"
                type="text"
                placeholder="Especifique"
                value={sexoAluno}
                onChange={(e) => setSexoAluno(e.target.value)}
              /><br /><br />
</>

)


}

export default DadosPessoais;
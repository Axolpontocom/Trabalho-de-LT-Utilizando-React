import Base from "../Base";
import "./Info.css";

const listaLinks = [
  { name: "Inicio", link: "" },
  { name: "Campus", link: "campus" },
  { name: "Docentes", link: "docentes" },
  { name: "Metodologia", link: "Metodologia" },
  { name: "Formulário", link: "formulario" },
];

function Info() {
  return (
    <Base listaButtom={listaLinks}>
      <article className="InfoArea">
        <p className="InfoText">
          Bem-vindo ao IFerno, um projeto desenvolvido como parte do trabalho de
          react da disciplina de LT, mas com uma identidade visual marcante e um
          clima sombrio que lembra que a vida acadêmica também pode ser um pouco
          caótica. O site foi pensado para apresentar a proposta do projeto de
          forma criativa, informativa e visualmente impactante, com foco em uma
          experiência simples, moderna e responsiva.
          <br></br>
          <br></br>O IFerno reúne elementos de apresentação institucional,
          navegação direta e conteúdo visual que reforça a identidade da marca.
          Entre suas funcionalidades, estão a exibição de informações, a
          organização das seções e a criação de uma interface amigável para
          diferentes dispositivos. A proposta é transmitir uma experiência
          digital que combina design, criatividade e funcionalidade, mesmo com
          um tom mais inquietante e humor ácido.
          <br></br>
          <br></br>
          Na parte técnica, o projeto foi desenvolvido com React e Vite, usando
          JavaScript e JSX para estruturar a interface, além de HTML e CSS para
          o layout e a estilização. O resultado é um site visualmente forte, com
          boa organização, responsividade e uma estética que reforça o tema
          escolhido para o trabalho escolar.
        </p>
      </article>
    </Base>
  );
}

export default Info;

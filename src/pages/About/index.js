import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

export default function About() {
  document.title = "Sobre | Daniel Louro Costa";
  return (
    <React.Fragment>
      <LogoArea />
      <TagsArea />
      <TextArea title="Sobre Mim">
        <p>
          Estudante de Engenharia da Computação pela Universidade
          Estácio Rio de Janeiro.
        </p>
        <p>
          Trabalho com projetos, utilizando  HTML, CSS e usando framework Django.
        </p>
        <p>
          Continuo estudando, porém hoje com um novo foco, o de me tornar Full-Stack.
          Acompanhando as tendências do mercado para agregar sempre um bom valor profissional.
          Hoje para construir aplicações não somente funcionais mas de imenso
          valor agregado, seguindo os padrões da comunidade desde o back ao
          front-end, utilizando APIs, Bibliotecas e Frameworks.
        </p>
        <p>Vamos conversar!?</p>
      </TextArea>
    </React.Fragment>
  );
}

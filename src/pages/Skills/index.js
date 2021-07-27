import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

export default function About() {
  document.title = "Tecnologias | Daniel Louro Costa";
  return (
    <React.Fragment>
      {/* <LogoArea /> */}
      {/* <TagsArea /> */}
      <TextArea title="Tecnologias" />
    </React.Fragment>
  );
}

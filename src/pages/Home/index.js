import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

export default function Home() {
  document.title = "Daniel Louro Costa";

  return (
    <React.Fragment>
      <LogoArea />
      <TagsArea position="50" home={true} />
      <TextArea
        home={true}
        pre={"Hi,~I'm Daniel,~Web Developer!"}
        title={"Oi,~eu sou Daniel,~Desenvolvedor Web!"}
        subtitle={"Back-End(Python) / Front-End(HTML/CSS) / Framework(Django)"}
      ></TextArea>
    </React.Fragment>
  );
}

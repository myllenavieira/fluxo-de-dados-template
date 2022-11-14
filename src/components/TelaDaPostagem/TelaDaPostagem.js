import React from "react";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      <Description>{props.titulo} </Description>
      <Image src={props.imagem} />
      <Description>{props.descricao}</Description>
      {/* <Image src={"https://picsum.photos/536/354"} alt={"drone view"} />
      <Description>{"Lorem Ipsum"}</Description> */}
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;

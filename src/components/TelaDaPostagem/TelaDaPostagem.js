import React from "react";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  return (
    (props.imagem.length > 0 && props.descricao.length > 0) ?
    <ContainerPostagem>
      <Description>{props.titulo} </Description>
      <Image src={props.imagem} />
      <Description>{props.descricao}</Description>
    </ContainerPostagem> :
    <ContainerPostagem>
    <Description>Titulo</Description>
    <Image src={"https://picsum.photos/536/354"} />
    <Description>Lorem Ipsum</Description>
  </ContainerPostagem>
  );
};

export default TelaDaPostagem;

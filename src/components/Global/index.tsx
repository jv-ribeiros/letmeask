import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: auto;
    &::-webkit-scrollbar-track {
      padding: 2px 0;
      background-color: rgb(15, 15, 15);
    }
    &2::-webkit-scrollbar {
      width: 20px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #838383;
    }
  }
  ._body {
    background: rgb(15, 15, 15);
    color: #29292e;
    height: 100vh;
  }

  body,
  input,
  button,
  textarea {
    font: 400 16px "Roboto", sans-serif;
  }
`;

type GlobalType = {
  children: ReactNode;
};

export function Global(props: GlobalType) {
  return (
    <Container>
      <div className="_body">{props.children}</div>
    </Container>
  );
}

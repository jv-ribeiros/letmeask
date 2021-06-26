import styled from "styled-components";

export const Container = styled.div`
  .room-code {
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    background: rgb(55, 55, 55);
    border: 1px solid rgb(15, 15, 15);
    color: #fff;
    cursor: pointer;

    display: flex;

    div {
      height: 100%;
      background: #087401;
      border: 2px solid #087401;
      padding: 0 12px;
      display: flex;
      justify-items: center;
      align-items: center;
    }

    span {
      display: block;
      align-self: center;
      flex: 1;
      padding: 0 16px 0 12px;
      width: 230px;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

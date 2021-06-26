import styled from "styled-components";

export const Div = styled.div`
  .button {
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: radial-gradient(circle, rgba(12, 88, 5, 1) 23%, rgba(12, 99, 5, 1) 48%, rgba(13, 94, 5, 1) 100%);
    color: #e9e9e9;
    padding: 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    overflow: hidden;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &.outlined {
      background: rgb(15, 15, 15);
      border: 1px solid #0eb102;
      color: #0eb102;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  .button:hover {
    filter: brightness(1.2);
  }

  .outlined:hover {
    filter: brightness(0.7);
  }

  @media (max-width: 1035px) {
  }
`;

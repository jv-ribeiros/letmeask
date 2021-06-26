import styled from "styled-components";

export const Container = styled.div`
  .bg {
    animation: bg 0.5s;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    background: rgba(20, 20, 20, 0.7);
  }
  .modal {
    position: absolute;
    display: flex;
    top: 100%;
    left: 50%;
    /* transform: translate(-50%, -50%); */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 30vh;
    min-width: 220px;
    max-width: 450px;
    min-height: 200px;
    background: #282828;
    border-radius: 20px;
    font-family: "Poppins", sans-serif;

    &.opened {
      animation: showModal 0.5s;
      transform: scale(0.9) translate(-55%, -220%);
    }
    &.closed {
      display: none;
    }

    h1 {
      color: #e96565;
      padding: 0px 10px;
      border-radius: 50%;
      border: 2px solid #e96565;
      text-align: center;
      margin-bottom: 20px;
      font-size: 26px;
    }
    h2 {
      color: #fff;
      font-size: 20px;
      margin-top: 10px;
    }
    & p {
      color: #838383;
      text-align: center;
      margin-bottom: 30px;
    }
    > div {
      display: flex;
      gap: 12px;
      button {
        height: 40px;
        width: 150px;
      }
      .cancel {
        background: #e96565;
        color: #750909;
        outline: none;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        cursor: pointer;
        font-weight: 500;
        font-size: 15px;
        &:hover {
          filter: brightness(0.9);
        }
      }
      .confirm {
        background: #5edb55;
        color: #064701;
        outline: none;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 500;
        font-size: 15px;
        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .modal {
      min-width: 300px;
      min-height: 250px;
      width: 85vw;
      height: 40vh;
      padding: 0px 10px;
      > div button {
        width: 90px;
      }
    }
  }

  @keyframes showModal {
    0% {
      display: none;
      transform: scale(0) translate(-50%, 0%);
    }
    100% {
      transform: scale(0.9) translate(-55%, -220%);
      display: block;
    }
  }
  @keyframes bg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      display: block;
    }
  }
`;

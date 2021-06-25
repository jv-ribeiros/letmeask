import styled from "styled-components";
export const Container = styled.div`
  #page-auth {
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
      flex: 7;
      background: radial-gradient(circle, rgba(23, 23, 23, 1) 6%, rgba(15, 15, 15, 1) 45%, rgba(15, 15, 15, 1) 100%);
      color: #838383;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 120px 80px;
      text-align: center;

      img {
        max-width: 320px;
        filter: invert() contrast(2) brightness(10) saturate(10);
      }
      strong {
        font: 700 36px "Poppins", sans-serif;
        line-height: 42px;
        margin-top: 16px;
        color: #d0d0d0;
        overflow: hidden;
      }
      p {
        font-size: 24px;
        line-height: 32px;
        margin-top: 14px;
        color: #838383;
      }
    }

    main {
      flex: 8;
      padding: 0 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 320px;
      align-items: stretch;
      text-align: center;
      > img {
        align-self: center;
        filter: contrast(2) brightness(2) invert();
      }

      h2 {
        font-size: 24px;
        margin: 64px 0 24px;
        font-family: "Poppins", sans-serif;
        color: #838383;
      }

      form {
        input {
          height: 50px;
          border-radius: 8px;
          padding: 0 16px;
          background: rgb(55, 55, 55);
          color: #fff;
          border: 0.5px solid rgb(55, 55, 55);
          outline: none;
          &::placeholder {
            color: #a0a0a0;
          }
          &:focus {
            outline: none;
          }
        }
        button {
          margin-top: 16px;
        }
        button,
        input {
          width: 100%;
        }
      }

      p {
        font-size: 14px;
        color: #a3a3a3;
        margin-top: 16px;
        a {
          color: #e559f9;
        }
      }
    }
    .create-room {
      margin-top: 64px;
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background: #962117;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 0;
      transition: filter 0.2s;

      img {
        margin-right: 8px;
      }

      &:hover {
        filter: brightness(1.3);
      }
    }
    .separator {
      font-size: 14px;
      color: #a8a8b3;
      margin: 32px 0;
      display: flex;
      align-items: center;

      &::before {
        content: "";
        flex: 1;
        height: 1px;
        background: #a8a8b3;
        margin-right: 16px;
      }
      &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: #a8a8b3;
        margin-left: 16px;
      }
    }
  }
`;

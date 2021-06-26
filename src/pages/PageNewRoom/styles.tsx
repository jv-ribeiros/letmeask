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
      padding: 10vh 2vw;

      img {
        width: 45vw;
        height: 85%;
        max-height: 400px;
        max-width: 320px;
        filter: invert() contrast(2) brightness(10) saturate(10);
      }
      strong {
        font: 700 32px "Poppins", sans-serif;
        margin-top: 16px;
        color: #d0d0d0;
        overflow: hidden;
        text-align: left;
      }
      p {
        font-size: 22px;
        line-break: loose;
        margin-top: 14px;
        color: #838383;
        overflow: hidden;
      }
    }

    main {
      flex: 6;
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
        filter: contrast(2) brightness(1) invert();
      }

      h2 {
        font-size: 24px;
        margin: 64px 0 24px;
        font-family: "Poppins", sans-serif;
        color: #dddddd;
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
        color: #838383;
        margin-top: 16px;
        a {
          color: #5ad351;
          text-decoration: none;

          &:hover {
            filter: brightness(0.8);
          }
        }
      }
    }
  }

  @media (max-width: 1035px) {
    #page-auth {
      padding-bottom: 50px;
      /* display: block; */
      justify-content: center;
      height: 100vh;
      aside {
        display: none;
      }
      main {
        padding: 20px;
      }
    }
  }
`;

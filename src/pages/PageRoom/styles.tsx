import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  #page-room {
    header {
      padding: 24px;
      border: none;
      overflow-y: auto;

      .content {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > img {
          max-height: 45px;
          filter: contrast(2) brightness(2) invert();
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }
        }

        > div {
          display: flex;
          gap: 16px;

          button {
            height: 40px;
          }
        }
      }
    }
    main {
      max-width: 808px;
      margin: 0 auto;

      .room-title {
        margin: 32px 0 24px;
        display: flex;
        align-items: center;

        h1 {
          font-family: "Poppins", sans-serif;
          font-size: 24px;
          color: #fff;
        }
        span {
          margin-left: 16px;
          min-width: 120px;
          background: #087401;
          border-radius: 9999px;
          padding: 8px 16px;
          color: #fff;
          font-weight: 500;
          font-size: 14px;
        }
      }

      form {
        textarea {
          width: 100%;
          border: 0;
          padding: 16px;
          border-radius: 15px;
          background: linear-gradient(165deg, rgba(30, 30, 30, 1) 80%, rgba(37, 37, 37, 1) 100%);
          color: #fff;
          resize: vertical;
          min-height: 130px;
          outline: none;
          &::placeholder {
            color: rgba(130, 130, 130, 1);
          }
        }
        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;

          .user-info {
            display: flex;
            align-items: center;
            img {
              width: 32px;
              height: 32px;
              border-radius: 50%;
            }
            span {
              margin-left: 8px;
              color: #838383;
              font-weight: 500;
              font-size: 14px;
            }
          }

          > span {
            font-size: 14px;
            color: #a3a3a3;
            font-weight: 500;
            button {
              background: transparent;
              border: 0;
              color: #5ad351;
              text-decoration: underline;
              font-weight: 500;
              cursor: pointer;
            }
          }
        }
      }

      .question-list {
        margin-top: 32px;
      }
    }
  }

  @media (max-width: 768px) {
    #page-room {
      padding: 10px 10px 40px 10px;
      header .content {
        flex-direction: column;
        > img {
          display: block;
          width: 100%;
          margin-bottom: 18px;
        }
        & > div {
          flex-direction: column-reverse;
          align-items: center;
          padding: 0 10px;
          .button {
            min-width: 200px;
            padding: 0 0px;
          }
        }
      }
      main .room-title {
        flex-direction: column-reverse;
        height: auto;
        margin-top: 5px;
        justify-content: center;
        align-items: flex-start;
        h1 {
          display: block;
          margin-bottom: 10px;
        }
        span {
          display: block;
          margin: 5px 0;
        }
      }
    }
  }
  /* }

  @media (max-width: 1024px) {
    #page-room {
      width: 100%;
      padding: 10px 10px 40px 10px;
    }
    #page-room main .room-title {
      align-items: flex-start;
      flex-direction: column-reverse;
      margin-top: 5px;
      h1 {
        display: block;
        margin-bottom: 10px;
      }
      span {
        display: block;
        margin: 10px 0;
      }
    }
  }




  @media (max-width: 768px) {
    #page-room {
      padding: 10px 10px 40px 10px;
      header .content {
        flex-direction: column;
        > img {
          display: block;
          width: 100%;
          margin-bottom: 18px;
        }
      }
      main .room-title {
        flex-direction: column-reverse;
        height: auto;
        margin-top: 5px;
        justify-content: center;
        align-items: flex-start;
        h1 {
          display: block;
          margin-bottom: 10px;
        }
        span {
          display: block;
          margin: 5px 0;
        }
      }
    }
  } */
`;

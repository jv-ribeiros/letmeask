import styled from "styled-components";

export const Container = styled.div`
  .question {
    background: linear-gradient(165deg, rgba(30, 30, 30, 1) 80%, rgba(37, 37, 37, 1) 100%);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
    padding: 24px;
    margin-bottom: 16px;
    overflow: hidden;

    &.highlighted {
      background: #021b0a;
      border-left: 6px solid #0e7206;
    }

    &.answered {
      background: rgba(20, 20, 20, 0.7);
      & p {
        color: #292929;
      }
      footer .user-info {
        & span {
          color: #292929;
        }
        & img {
          filter: brightness(0.2) grayscale(2);
        }
      }
    }

    p {
      color: #ffffff;
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;

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
          color: #a9a9a9;
          font-size: 14px;
        }
      }

      > div {
        display: flex;
        gap: 16px;
      }
      button {
        border: 0;
        background: transparent;
        cursor: pointer;
        transition: filter 0.2s;

        &.like-button {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          svg path {
            stroke: #fff;
          }

          &.liked {
            color: #0eb102;
            svg path {
              stroke: #0eb102;
            }
          }
        }

        &:hover {
          filter: brightness(0.7);
        }
      }
    }
  }
`;

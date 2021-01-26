import styled, { css } from 'styled-components';

interface ContainerProps {
  modalTool: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.24);

  animation: bgOpacity 0.5s;

  @keyframes bgOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  form {
    max-width: 570px;
    width: 100%;

    padding: 32px 64px;

    background: var(--White);
    border: 1px solid var(--DarkestWhite);
    border-radius: 5px;

    ${props =>
      props.modalTool &&
      css`
        animation: modalUpToDown 1s;

        @keyframes modalUpToDown {
          from {
            margin-top: -100%;
          }
          to {
            margin-top: 0;
          }
        }
      `}

    h4 {
      font: var(--Header4);
      margin-bottom: 32px;
    }

    div {
      display: flex;
      justify-content: flex-end;

      margin-top: 48px;

      & button {
        padding: 14px 26px;
        margin-left: 48px;

        background: var(--Red);

        border: none;
        border-radius: 5px;

        cursor: pointer;
        outline: none;

        font: var(--BodySmall);
        letter-spacing: 0.02em;
        color: var(--White);

        transition: all 0.2s;

        &:hover {
          background: var(--DarkRed);
        }

        &:first-child {
          background: transparent;
          color: var(--Red);

          &:hover {
            color: var(--DarkRed);
          }
        }
      }
    }
  }
`;

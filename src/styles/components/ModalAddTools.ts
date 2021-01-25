import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.64);

  form {
    max-width: 570px;
    width: 100%;

    padding: 32px 64px;

    background: var(--White);
    border: 1px solid var(--DarkestWhite);
    border-radius: 5px;

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 32px;

      h4 {
        font: var(--Header4);
      }

      & > button {
        background: none;
        border: none;
        outline: none;

        cursor: pointer;

        svg {
          width: 16px;
          fill: none;
          stroke-width: 2px;
          stroke: var(--Ink);
          stroke-miterlimit: 10;

          transition: all 0.4s;
        }
      }

      &:hover svg {
        transform: rotate(45deg);
      }
    }

    fieldset {
      margin-bottom: 32px;

      border: none;

      &:last-child {
        margin-bottom: 0;
      }

      label {
        display: flex;
        flex-direction: column;

        font-weight: 600;

        input {
          margin-top: 20px;
          padding: 12px 20px;

          background: var(--DarkerWhite);
          border: 1px solid var(--DarkestWhite);
          border-radius: 5px;
          outline: none;

          font: var(--Body);
          color: var(--LighterInk);

          transition: all 0.4s;

          &:focus {
            background: var(--MostDarkestWhite);

            color: var(--LightInk);
          }
        }
      }
    }

    & > button {
      display: block;
      margin-left: auto;

      padding: 14px 26px;

      background: var(--Blue);

      border: none;
      border-radius: 5px;

      cursor: pointer;
      outline: none;

      font: var(--BodySmall);
      letter-spacing: 0.02em;
      color: var(--White);

      transition: all 0.2s;

      &:hover {
        background: var(--DarkBlue);
      }
    }
  }
`;

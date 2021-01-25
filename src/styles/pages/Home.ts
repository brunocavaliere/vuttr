import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 0;

  h1 {
    margin-bottom: 12px;

    font: var(--Header1);
  }

  h3 {
    margin-bottom: 48px;

    font: var(--Header3);
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 16px 0;

  input {
    max-width: 360px;
    width: 100%;

    padding: 16px 32px;

    border: 1px solid var(--DarkestWhite);
    border-radius: 5px;

    outline: none;

    &::placeholder {
      font: var(--Body);
      color: var(--LighterInk);
    }
  }

  button {
    padding: 16px 32px;

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
`;

export const Tools = styled.div`
  padding: 32px;
  margin-bottom: 32px;

  background: var(--White);
  border: 1px solid var(--DarkestWhite);
  border-radius: 5px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 16px;

    h5 {
      font: var(--Header5);
      color: var(--Blue);

      & a {
        padding: 8px 0;

        text-decoration: none;

        transition: all 0.2s;

        &:hover {
          color: var(--DarkBlue);
        }
      }
    }

    button {
      padding: 8px 0;

      background: transparent;
      border: none;

      font: var(--BodySmall);
      color: var(--Red);

      outline: none;
      cursor: pointer;

      &:hover {
        color: var(--DarkRed);
      }
    }
  }

  & > div:last-child {
    margin-top: 24px;

    font: var(--BodySmall);
    font-weight: 600;

    span {
      margin-right: 16px;
    }
  }
`;

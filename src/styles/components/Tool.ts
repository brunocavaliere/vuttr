import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;

  background: var(--White);
  border: 1px solid var(--DarkestWhite);
  border-radius: 5px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 8px;

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

      cursor: pointer;

      &:hover {
        color: var(--DarkRed);
      }
    }
  }

  & > p:last-child {
    margin-top: 24px;

    font: var(--BodySmall);
    font-weight: 600;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
    height: 70px;
    padding: 16px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #a8a8b3;
    border: 2px solid #04d361;
    border-right: 0;
    width: 100%;

    display: flex;
    align-items: center;

    & + div {
      margin-top: 8px;
    }

    input {
      flex: 1;
      background: transparent;
      border: 0;
      &::placeholder {
      color: #a8a8b3;
      }
    }
    svg {
      margin-right: 16px;
    }
`;

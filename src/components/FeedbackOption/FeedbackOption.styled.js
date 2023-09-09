import styled from '@emotion/styled';

export const BtnList = styled.ul`
  display: flex;
  column-gap: 16px;

  .good {
    background-color: #84f542;
  }

  .bad {
    background-color: #f5514e;
  }

  button {
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 8px;
  }
`;

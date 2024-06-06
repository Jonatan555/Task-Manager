import styled from "styled-components";

export const Container = styled.li`
  background: ${({ theme }) => theme.colors.PRIMARY700}22;
  display: flex;
  gap: 0.8rem;
  padding: 0.8rem 1.8rem;

  &:hover {
    background: ${({ theme }) => theme.colors.PRIMARY700}44;
    cursor: pointer;
  }

  i {
    color: ${({ theme }) => theme.colors.PRIMARY400};
    font-size: 1.8rem;
  }
`;

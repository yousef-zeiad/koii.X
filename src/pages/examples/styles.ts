import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.secondary[9]};
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;

  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  text-align: left;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

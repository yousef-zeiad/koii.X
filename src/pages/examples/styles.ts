import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.secondary[9]};
  color: ${({ theme }) => theme.colors.white};
  min-height: 100%;
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
  & .example--wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  @media (max-width: 770px) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const NftsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 2rem;
  gap: 2rem;
  width: 100%;
  margin: 1rem 0;
  width: 100%;
  text-align: left;
  @media (max-width: 770px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

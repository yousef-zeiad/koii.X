import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.primary[8]};
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const floatingAnimation = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
`;

export const Image = styled.img`
  width: 150px;
  animation: 6s ${floatingAnimation} ease-in-out infinite;
`;

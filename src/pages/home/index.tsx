import styled, { keyframes } from "styled-components";
// ui
import { Button } from "components/ui";
export const Home: React.FC = () => {
  return (
    <Wrapper>
      <Image src={"/static/logo.svg"} alt="koii-logo" />
      <Heading>Create Koii App</Heading>
      <Button as="a" href="https://github.com/koii-network/koii.X" target="_blank" size="md" color="secondary" m="1rem 0 0.5rem 0">
        Documentations
      </Button>
      <Description>Happy hacking!</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const floatingAnimation = keyframes`
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

const Image = styled.img`
  width: 150px;
  animation: 6s ${floatingAnimation} ease-in-out infinite;
`;

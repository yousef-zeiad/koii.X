import { Link } from "react-router-dom";
// ui
import { Button } from "components/ui";
// styles
import { Wrapper, Heading, Description, Image } from "./styles";

export const Home: React.FC = () => {
  return (
    <Wrapper>
      <Image src={"/static/logo.svg"} alt="koii-network-logo" />
      <Heading>Create Koii App</Heading>
      <Button as={Link} to="/examples" size="md" color="secondary" m="1rem 0 0.5rem 0">
        Examples →
      </Button>
      <Button as="a" href="https://github.com/koii-network/koii.X" target="_blank" size="md" color="secondary" m="0.25rem 0 0.5rem 0">
        Documentations ↗
      </Button>
      <Description>Happy hacking!</Description>
    </Wrapper>
  );
};

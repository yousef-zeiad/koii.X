import { Link } from "react-router-dom";
// ui
import { Button, Paper } from "components/ui";
// styles
import { Wrapper, Heading, Container } from "./styles";

export const Examples: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>#1 Connect to finnie</Heading>
        <Paper m="1rem 0 0 0" p="1rem">
          <Button color="secondary">Click here to connect</Button>
        </Paper>
      </Wrapper>
    </Container>
  );
};

// ui
import { Button, Paper } from "components/ui";
// styles
import { Wrapper, Heading, Container } from "./styles";
// code snipperts
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Examples: React.FC = () => {
  const codeBlock = `
const {connectToFinnie, isLoading, walletAddress} = useFinnie(); 

<Button onClick={connectToFinnie}>
  Click here to connect
</Button>
  `.trim();
  return (
    <Container>
      <Wrapper>
        <Heading>— 1 Connect to Finnie</Heading>
        <Paper m="1rem 0 0 0" p="1rem">
          <p>Click on the button to connect to Finnie.</p>
          <Button m="5px 0 1rem 0" color="secondary">
            Click here to connect
          </Button>
          {/* Code Source */}
          <SyntaxHighlighter customStyle={{ borderRadius: "4px", fontSize: "12px" }} language="javascript" style={darcula}>
            {codeBlock}
          </SyntaxHighlighter>
        </Paper>
        <Button as="a" href="https://github.com/koii-network/koii.X#usefinnie" target="_blank" size="md" color="primary" m="1rem 0 0 0">
          <strong>useFinnie</strong> Documentations ↗
        </Button>
      </Wrapper>
    </Container>
  );
};

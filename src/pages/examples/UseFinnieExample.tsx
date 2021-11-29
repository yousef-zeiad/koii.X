// ui
import { Button, Paper } from "components/ui";
// styles
import { Heading } from "./styles";
// code snipperts
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
// hooks
import { useFinnie } from "services/hooks";

export default function UseFinnieExample() {
  const codeBlock = `
const {connectToFinnie, walletAddress} = useFinnie(); 

<Button onClick={connectFinnie}>
  Click here to connect
</Button>
  `.trim();

  /* Working example */
  const { connectFinnie, isLoading, isError, walletAddress, isFinnieConnected } = useFinnie();

  return (
    <>
      <Heading>— 1 Connect to Finnie</Heading>
      <Paper m="1rem 0 0 0" p="1rem">
        <p>Click on the button to connect to Finnie.</p>
        <Button m="5px 0 1rem 0" color="secondary" isLoading={isLoading} onClick={connectFinnie}>
          {isLoading ? "Connecting..." : isFinnieConnected ? "Connected ✓" : "Click here to connect"}
        </Button>

        {isFinnieConnected && !isLoading && (
          <Paper bg="#059669" color="white">
            <p>
              <strong>Connected ✓</strong>
            </p>
            <p>
              Your wallet address is: <code>{walletAddress}</code>
            </p>
          </Paper>
        )}

        {isError && (
          <Paper bg="#DC2626" color="white">
            <>An error occurred while connecting to finnie.</>
          </Paper>
        )}

        {/* Code Source */}
        <SyntaxHighlighter customStyle={{ borderRadius: "4px", fontSize: "12px", marginTop: "20px" }} language="javascript" style={darcula}>
          {codeBlock}
        </SyntaxHighlighter>
      </Paper>
      <Button as="a" href="https://github.com/koii-network/koii.X#usefinnie" target="_blank" size="md" color="primary" m="1rem 0 0 0">
        <strong>useFinnie</strong> Documentations ↗
      </Button>
    </>
  );
}

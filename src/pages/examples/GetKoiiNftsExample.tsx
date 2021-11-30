// ui
import { Button, Paper } from "components/ui";
import { NftCard } from "components/cards";
// styles
import { Heading, NftsListWrapper } from "./styles";
// code snipperts
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
// hooks
import { useSdk } from "services/hooks";

export default function GetKoiiNftsExample() {
  const codeBlock = `
const {getKoiiNfts} = useSdk(); 

<Button onClick={getKoiiNfts}>
  Get my Koii nfts
</Button>
  `.trim();

  /* Working example */
  const { wallet, status, getKoiiNfts } = useSdk();

  return (
    <div className="example--wrapper">
      <Heading>— 2 Get Koii Nfts</Heading>
      <Paper m="1rem 0 0 0" p="1rem">
        <p>
          Click on the button to get your nfts. <small>(After connecting to finnie)</small>
        </p>
        <Button m="5px 0 1rem 0" color="secondary" isLoading={status === "loading"} onClick={getKoiiNfts}>
          {status === "loading" ? "Loading..." : status === "success" ? "Done ✓" : "Get my nfts"}
        </Button>

        {status === "success" && (
          <Paper bg="#E5E7EB" color="black">
            <p>
              <strong>Connected ✓</strong>
            </p>
            <NftsListWrapper>
              {wallet?.nfts?.map((nft: any, id: number) => {
                return <NftCard item={nft} key={nft?.id || id} />;
              })}
            </NftsListWrapper>
          </Paper>
        )}

        {status === "error" && (
          <Paper bg="#DC2626" color="white">
            <>An error occurred getting your nfts or connecting to finnie.</>
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
    </div>
  );
}

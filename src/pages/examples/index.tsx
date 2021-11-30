/* Examples */
import UseFinnieExample from "./UseFinnieExample";
import GetKoiiNftsExample from "./GetKoiiNftsExample";
// styles
import { Wrapper, Container } from "./styles";

export const Examples: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <UseFinnieExample />
        <GetKoiiNftsExample />
      </Wrapper>
    </Container>
  );
};

import styled from 'styled-components';

export const TextInput = styled.input<{ fontSize: number, color?: string }>`
  font-size: ${props => props.fontSize}px;
  &:hover{
  background-color: red;
  }
`;

<TextInput fontSize={20}>

</TextInput>

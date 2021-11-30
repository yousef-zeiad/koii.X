import styled from "styled-components";

export const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.space[2]};
  width: 200px;
  text-decoration: none;
  &:hover {
    & .nft--icon {
      display: inline;
    }
  }
  @media (max-width: 770px) {
    width: 100%;
  }
`;
export const CardThumbnail = styled.img`
  height: 150px;
  object-fit: cover;
  border-top-left-radius: ${({ theme }) => theme.space[2]};
  border-top-right-radius: ${({ theme }) => theme.space[2]};
  background: #f3f4f6;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-left-radius: ${({ theme }) => theme.space[2]};
  border-bottom-right-radius: ${({ theme }) => theme.space[2]};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: left;
  flex-grow: 1;
`;

export const CardTitle = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.space[0.5]};
  color: ${({ theme }) => theme.colors.primary[8]};
`;
export const CardDescription = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.space[1]};
  color: ${({ theme }) => theme.colors.primary[5]};
  font-weight: 500;
`;

export const CardExternalIcon = styled.span`
  & span {
    line-height: 1;
  }
  display: none;
`;

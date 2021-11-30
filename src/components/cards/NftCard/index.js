import React from "react";
// styles
import { CardContainer, CardThumbnail, CardDetails, CardTitle, CardDescription, CardExternalIcon } from "./styles";

export default function NftCard({ item }) {
  console.log({ item });
  return (
    <CardContainer href={`https://koi.rocks/content-details/${item?.id}`} target="_blank" rel="noopener noreferrer">
      <CardThumbnail src={`https://koii.live/${item?.id}.png`} alt={item?.title} />
      <CardDetails>
        <CardTitle>
          {item?.title}{" "}
          <CardExternalIcon className="nft--icon">
            <span>↗</span>
          </CardExternalIcon>
        </CardTitle>
        <CardDescription>{item?.description}</CardDescription>
      </CardDetails>
    </CardContainer>
  );
}

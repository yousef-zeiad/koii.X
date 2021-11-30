import React from "react";
import { getNftsStats } from "services/utils";
// sdk
import * as kweb from "@_koi/sdk/web";
let koiSDK = new kweb.Web();
// hooks
import { useFinnie } from "services/hooks";

export default function useSdk() {
  const [{ wallet, status, error }, setState] = React.useState({ status: "idle", error: null });
  /* useFinnie to connect to finnie */
  const { connectFinnie } = useFinnie();

  const getKoiiNfts = async () => {
    setState(prevState => ({ ...prevState, status: "loading", error: null }));
    try {
      const walletAddress = await connectFinnie();
      console.log({ walletAddress });
      const nfts = await koiSDK.getNftsByOwner(walletAddress);
      const [totalAttention, totalReward] = getNftsStats(nfts);
      console.log({ nfts, totalAttention, totalReward });
      setState(prevState => ({ ...prevState, status: "success", wallet: { nfts, totalAttention, totalReward }, error: null }));
    } catch (error) {
      console.log({ error });
      setState(prevState => ({ ...prevState, status: "error", error }));
    }
  };
  return { wallet, status, error, getKoiiNfts };
}

import React from "react";
import { sleep } from "../api";

export default function useFinnie() {
  const [{ walletAddress, isError, isLoading }, setState] = React.useState({ walletAddress: null, isError: false, isLoading: false });
  const connectToFinnie = () => {
    /* Loading */
    setState(prevState => ({ ...prevState, isLoading: true }));
    // TODO: Try to connect
    await sleep(2000);
    // TODO: Error handling
    setState(prevState => ({ ...prevState, isLoading: false }));
  };
  return { walletAddress, isError, isLoading, connectToFinnie };
}

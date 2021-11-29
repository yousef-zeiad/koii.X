import React from "react";
import { connectToExtension, getAddress, initExtension } from "services/api";

export default function useFinnie() {
  const [{ walletAddress, isError, isLoading, isFinnieConnected }, setState] = React.useState({ walletAddress: null, isError: false, isLoading: false, isFinnieConnected: false });
  const connectFinnie = async () => {
    try {
      setState(prevState => ({ ...prevState, isLoading: true, isError: null, isFinnieConnected: false }));
      // Check if extension exists
      await initExtension();
      // Connect to extension
      await connectToExtension();
      // Get finnie address
      await getAddress().then(res => {
        if (res.status === 200) {
          /* Done, we have the address */
          setState(prevState => ({ ...prevState, walletAddress: res?.data, isFinnieConnected: true, isLoading: false, isError: null }));
        } else {
          throw new Error("Error getting finnie address!");
        }
      });
    } catch (error) {
      setState(prevState => ({ ...prevState, isLoading: false, isError: error, walletAddress: null, isFinnieConnected: false }));
    }
  };
  return { walletAddress, isError, isLoading, isFinnieConnected, connectFinnie, koiiWallet: window.koiWallet };
}

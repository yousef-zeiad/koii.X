import axios from "service/axios";
import { default as Axios } from "axios";
import Web3 from "web3";
// utils
import { poll } from "./utils";
// abi
import koiRouterABI from "./abi/KoiRouter.json";
import koiTokenABI from "./abi/KoiToken.json";
// sdk
import Arweave from "arweave";
import { interactWrite as interactWriteSdk } from "smartweave";
// assets
import zombieList from "./json/zombies.json";

const arweave = Arweave.init({
  host: "arweave.net",
  protocol: "https",
  port: 443
});
export const sleep = (t = 300) => new Promise(resolve => setTimeout(resolve, t));

export const initExtension = async () => {
  try {
    // Does it exist?
    let extensionObj = await poll(() => window.koiiWallet, 1000, 200);
    // Is it connected?
    let res = await extensionObj.getPermissions();

    if (res.status === 200 && res.data.length) return true;
    else return false;
  } catch (error) {
    // Have to throw error to trigger rejected
    throw new Error("Extension does not exist");
  }
};

export const connectToExtension = async () => {
  try {
    const extension = window.koiiWallet;
    let res = await extension.connect();
    if (res.status === 200) return true;

    throw new Error(res?.data);
  } catch (error) {
    throw new Error(error);
  }
};

export const getAddress = async () => {
  const extension = window.koiiWallet;
  try {
    let res = await extension.getAddress();
    if (res) return res;
    else throw new Error(res.data);
  } catch (error) {
    // If we get here it's most likey user uninstalled extension and re-installed
    // Very edgy edge-case, but better to handle than not
    extension?.disconnect();
    throw new Error(error);
  }
};

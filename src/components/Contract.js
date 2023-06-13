import { ethers } from "ethers";
import modelValidationPlatformAbi from "../../src/contracts/artifacts/ModelValidationPlatformABI.json";
export const MODEL_VALIDATION_PLATFORM_ADDRESS =
  "0x9AC4A2B494C509de39C1eEB493AbA82B6a00A7De";

export const modelInstance = async () => {
  const { ethereum } = window;
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    if (!provider) {
      console.log("Metamask is not installed, please install!");
    }
    const con = new ethers.Contract(
      MODEL_VALIDATION_PLATFORM_ADDRESS,
      modelValidationPlatformAbi,
      signer
    );
    // console.log(con);
    return con;
  } else {
    console.log("error");
  }
};

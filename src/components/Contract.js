import { ethers } from "ethers";
import modelValidationPlatformAbi from "../../src/contracts/artifacts/ModelValidationPlatformABI.json";
export const MODEL_VALIDATION_PLATFORM_ADDRESS =
  // "0xF005dD3CAFc14D1FCD4cBe0A2689a1D989114375";
  "0x4fB35F89E02A4f7822a273a9783600d96b0D5F01";
// "0x4eA1159ADc5681AB7da5d6F9e4E6F83a62a19202";

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
    console.log(con);
    return con;
  } else {
    console.log("error");
  }
};

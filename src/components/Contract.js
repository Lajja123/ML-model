import { ethers } from "ethers";
import modelValidationPlatformAbi from "../../src/contracts/artifacts/ModelValidationPlatformABI.json";
export const MODEL_VALIDATION_PLATFORM_ADDRESS =
  "0xF005dD3CAFc14D1FCD4cBe0A2689a1D989114375";

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

import { BigNumberish } from "ethers";
import { useContractRead } from "wagmi";
import ABIERC721 from "../contracts/ERC721";

export const useERC721 = (address: string, tokenId: BigNumberish) => {
  return useContractRead({
    addressOrName: address,
    contractInterface: ABIERC721,
    functionName: "tokenURI",
    args: [tokenId],
  });
};

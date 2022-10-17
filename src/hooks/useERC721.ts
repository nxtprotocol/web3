import { BigNumberish } from "ethers";
import { useContractRead } from "wagmi";
import ABIERC721 from "../abis/ERC721";

export const useERC721 = (address: string, tokenId: BigNumberish) => {
  const contractConfig = {
    addressOrName: address,
    contractInterface: ABIERC721,
  };
  return useContractRead({
    ...contractConfig,
    functionName: "tokenURI",
    args: [tokenId],
  });
};

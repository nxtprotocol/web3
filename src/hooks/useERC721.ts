import { BigNumberish } from "ethers";
import { useContractRead } from "wagmi";
import ABIERC721 from "../abis/ERC721";

export const useERC721 = (address: string, tokenId: BigNumberish) => {
  return useContractRead({
    address: address,
    abi: ABIERC721,
    functionName: "tokenURI",
    args: [tokenId],
  });
};

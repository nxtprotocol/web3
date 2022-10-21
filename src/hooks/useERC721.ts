import { BigNumberish } from "ethers";
import { useContractRead } from "wagmi";
import { useConfig } from "../contexts/Config";

export const useERC721 = (address: string, tokenId: BigNumberish) => {
  const conf = useConfig();
  return useContractRead({
    addressOrName: address,
    contractInterface: conf?.abi.ERC721.default,
    functionName: "tokenURI",
    args: [tokenId],
  });
};

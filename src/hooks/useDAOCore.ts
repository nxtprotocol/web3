import { useConfig } from "./../contexts/Config";
import { ethers } from "ethers";
import { useProvider } from "wagmi";

export const useDAOCore = (address: string) => {
  const conf = useConfig();
  const provider = useProvider();
  if (!conf) return undefined;
  return new ethers.Contract(address, conf.abi.DAOCore.default).connect(provider);
};

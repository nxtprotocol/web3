import { useConfig } from './../contexts/Config';
import { useProvider } from "wagmi";
import { ethers } from 'ethers';

export const useDAOFactory = () => {

  const provider = useProvider()
  const conf = useConfig()
  console.log(conf)
  if (!conf) return undefined;
  return new ethers.Contract(conf.address.default.DAOFactory, conf.abi.DAOFactory.default).connect(provider)
};

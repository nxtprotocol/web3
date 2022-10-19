import { useProvider } from "wagmi";
import { ABIDAOFactory } from "../abis/DAOFactory";
import { useConfig } from "../constants/config";
import { ethers } from 'ethers';

export const useDAOFactory = () => {

  const provider = useProvider()
  const { daoFactory } = useConfig()
  return new ethers.Contract(daoFactory, ABIDAOFactory).connect(provider)
};

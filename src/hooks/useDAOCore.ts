import { ABIDAOCore } from './../abis/DAOCore';
import { ethers } from "ethers"
import { useProvider } from "wagmi"

export const useDAOCore = (address: string) => {
  const provider = useProvider()
  return new ethers.Contract(address, ABIDAOCore).connect(provider)
}
import { useState } from "react";
import { useContractRead, useContractReads } from "wagmi";
import { ABIAddressVault } from "../abis/AddressVault";
import { ABIDAOFactory } from "../abis/DAOFactory";
import { globalAddress } from "../constants/ecosystem";

export const useDAO = (id: number) => {

  const [] = useState()

  const vaultABI = {
    abi: ABIAddressVault,
  };
  const { data: vault } = useContractRead({
    address: globalAddress.daoFactory,
    abi: ABIDAOFactory,
    functionName: "addressVaultOf",
    args: [id],
  });
  const { data: addresses, isSuccess } = useContractReads({
    contracts: [
      {
        ...vaultABI,
        address: vault,
        functionName: "daoCore",
        args: [],
      },
      {
        ...vaultABI,
        address: vault,
        functionName: "governance",
        args: [],
      },
      {
        ...vaultABI,
        address: vault,
        functionName: "boardingpass",
        args: [],
      },
      {
        ...vaultABI,
        address: vault,
        functionName: "timechain",
        args: [],
      },
    ],
  });
  console.log(addresses, isSuccess);
  return {};
};

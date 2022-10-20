import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useProvider } from "wagmi";
import { ethers } from "ethers";
import { ABIAddressVault } from "../contracts/v0.0.1/abi/AddressVault";

export const useAddressVault = () => {
  const provider = useProvider()
  return new ethers.Contract(ethers.constants.AddressZero, ABIAddressVault).connect(provider);
};
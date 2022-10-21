import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useProvider } from "wagmi";
import { ethers } from "ethers";
import { useConfig } from "../contexts/Config";

export const useAddressVault = () => {
  const provider = useProvider()
  const conf = useConfig()
  if (!conf) return undefined;
  return new ethers.Contract(ethers.constants.AddressZero, conf.abi.AddressVault.default).connect(provider);
};

const currentVersion: string = "v0.0.1";

export const loadConfig = async (): Promise<Config> => {
  return {
    address: await import(`../contracts/${currentVersion}/addresses`),
    abi: {
      AddressVault: await import(
        `../contracts/${currentVersion}/abi/AddressVault`
      ),
      DAOCore: await import(`../contracts/${currentVersion}/abi/DAOCore`),
      DAOFactory: await import(`../contracts/${currentVersion}/abi/DAOFactory`),
      ERC721: await import(`../contracts/${currentVersion}/abi/ERC721`),
    },
  };
};

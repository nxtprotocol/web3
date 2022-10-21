interface AddressBook {
  DAOFactory: string;
}

interface Module<Type> {
  default: Type;
}

type Config = {
  address: Module<AddressBook>
  abi: {
    AddressVault: Module<any>;
    DAOCore: Module<any>;
    DAOFactory: Module<any>;
    ERC721: Module<any>;
  };
};

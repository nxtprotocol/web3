const currentVersion: string = "0.0.2";

type Addresses = {
  daoFactory: string;
}

const addresses: {[key: string]: Addresses} = {
  "0.0.2": {
    daoFactory: "0xA74144cC18f86bbDEB0cA9adfBE859d1ed87D35e"
  },
}

export function useConfig() {
  return addresses[currentVersion];
}
export const shortenEthAddress = (addr: string) =>
  addr.slice(0, 6) + "..." + addr.slice(addr.length - 4, addr.length);


import { BigNumberish } from "ethers";

export type DAO = {
  name?: string;
  addresses: {
    core?: string;
    governance?: string;
    boardingPass?: string;
    timechain?: string;
    proposalFactory?: string;
  };
  members?: BigNumberish;
  assets?: BigNumberish;
  valuation?: BigNumberish;
}
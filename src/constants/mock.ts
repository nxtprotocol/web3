import { BigNumber } from "ethers";
import { DAO } from "../types/dao";

export const mockDaos: DAO[] = [
  {
    name: "Dao Mai Geng",
    valuation: BigNumber.from("300000000"),
    addresses: {
      core: "0x1eb8acaE4B37Cd179489164d8e2E2dCD6aB989A2",
      proposalFactory: "",
      governance: "",
      boardingPass: "",
      timechain: "",
    },
    members: BigNumber.from("214"),
    assets: BigNumber.from("13"),
  },
  {
    name: "BabyDAO",
    valuation: BigNumber.from("31000000"),
    addresses: {
      core: "0x1eb8acaE4B37Cd179489164d8e2E2dCD6aB989A2",
      proposalFactory: "",
      governance: "",
      boardingPass: "",
      timechain: "",
    },
    members: BigNumber.from("11"),
    assets: BigNumber.from("3"),
  },
  {
    name: "Bitkub Official",
    valuation: BigNumber.from("9000000"),
    addresses: {
      core: "0x1eb8acaE4B37Cd179489164d8e2E2dCD6aB989A2",
      proposalFactory: "",
      governance: "",
      boardingPass: "",
      timechain: "",
    },
    members: BigNumber.from("12"),
    assets: BigNumber.from("10"),
  },
];
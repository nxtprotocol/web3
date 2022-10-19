import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { BigNumber, Contract } from "ethers";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DAOCard } from "../../components/DAOCard";
import { Navbar } from "../../components/Navbar";
import { mockDaos } from "../../constants/mock";
import { useAddressVault } from "../../hooks/useAddressVault";
import { useDAOFactory } from "../../hooks/useDAOFactory";
import { DAO } from "../../types/DAO";
import { Collections } from "./components/Collections";
import { DAOInfo } from "./components/DAOInfo";
import { Proposal } from "./components/Proposal";

export const DaoPage: NextPage = () => {
  const router = useRouter();
  const addressVault = useAddressVault();
  const factory = useDAOFactory();

  const [vault, setVault] = useState<Contract>(addressVault);
  const [tc, setTc] = useState<string>("");
  const [core, setCore] = useState<string>("");
  const [gov, setGov] = useState<string>("");
  const [bp, setBp] = useState<string>("");

  const init = async (daoId: string) => {
    const converted = BigNumber.from(daoId);
    const v = await factory.addressVaultOf(converted);
    let realVaultTmp = addressVault.attach(v);
    setVault(realVaultTmp);
    setTc(await realVaultTmp.timechain());
    setCore(await realVaultTmp.daoCore());
    setGov(await realVaultTmp.governance());
    setBp(await realVaultTmp.boardingpass());
  };

  useEffect(() => {
    if (router.query.daoId) {
      init(router.query.daoId as string);
    }
  }, [router.query]);

  if (!router.query.daoId || !tc || !core || !gov || !bp) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          marginY: 10,
        }}
      >
        <DAOInfo
          timechainAddress={tc}
          daoCoreAddress={core}
          addressVaultAddress={vault.address}
          governanceAddress={gov}
          boardingPassAddress={bp}
        />
        <Proposal />
        {/* <Collections dao={dao}/> */}
      </Container>
    </>
  );
};

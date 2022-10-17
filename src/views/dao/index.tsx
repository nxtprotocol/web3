import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DAOCard } from "../../components/DAOCard";
import { Navbar } from "../../components/Navbar";
import { mockDaos } from "../../constants/mock";
import { DAO } from "../../types/DAO";
import { Collections } from "./components/Collections";
import { DAOInfo } from "./components/DAOInfo";
import { Proposal } from "./components/Proposal";

export const DaoPage: NextPage = () => {
  const router = useRouter();
  const [dao, setDao] = useState<DAO>();
  const { address } = router.query;

  useEffect(() => {
    if (address) {
      // fetch dao data here
      // ** mock **
      const daoData = mockDaos[0];
      setDao(daoData);
    }
  }, [address]);

  if (!address) {
    return null;
  }

  if (!dao) {
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
        <DAOInfo dao={dao} />
        <Proposal />
        <Collections dao={dao}/>
      </Container>
    </>
  );
};

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { BigNumber } from "ethers";
import { FC } from "react";
import { DAOCard } from "../../../components/DAOCard";
import { DAO } from "../../../types/DAO";

const mockDaos: DAO[] = [
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

export const Popular: FC = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          marginY: 6,
        }}
      >
        <Typography variant="h5">Popular DAOs</Typography>
      </Container>
      <Box
        sx={{
          backgroundColor: "#f7f7f7",
          borderRadius: 2,
          paddingY: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {mockDaos.map((dao, index) => (
              <Grid key={`popular-dao-${index}`} item xs={12} md={6}>
                <DAOCard dao={dao} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              my: 4,
              textAlign: "center",
              color: "black"
            }}
          >
            <Button
              variant="contained"
              color="inherit"
            >
              + Create your own now
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

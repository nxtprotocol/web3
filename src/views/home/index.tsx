import { Box, Button, Container, InputBase, Typography } from "@mui/material";
import { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import { Popular } from "./components/Popular";
import { CreateCard } from "./components/CreateCard";

export const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          marginY: 10,
        }}
      >
        <Typography variant="h3" maxWidth={800}>
          A Decentralized NFTs Funding and Lending Protocol
        </Typography>
        <Box marginY={10}>
          <Typography variant="body1">
            Find any DAO from their address.
          </Typography>
          <InputBase
            placeholder="DAO’s address here"
            sx={{
              marginTop: 2,
              marginBottom: 4,
              border: "solid",
              borderColor: "#00000020",
              borderWidth: "0 0 1px 0",
              width: "100%",
              fontSize: 26,
            }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ height: "60px", gap: 1 }}
          >
            <SearchIcon />
            Search
          </Button>
        </Box>
      </Container>
      <Popular />
      <CreateCard />
    </>
  );
};

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { BigNumber } from "ethers";
import { useRouter } from "next/router";
import { FC } from "react";
import { DAOCard } from "../../../components/DAOCard";


export const Popular: FC = () => {
  const router = useRouter();
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
            
          </Grid>
          <Box
            sx={{
              my: 4,
              textAlign: "center",
              color: "black",
            }}
          >
            <Button
              variant="contained"
              color="inherit"
              onClick={() => router.push("/create")}
            >
              + Create your own now
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

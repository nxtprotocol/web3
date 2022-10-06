import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import collectables from "../../../../public/nft-collectables.jpg";

export const CreateCard: FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginY: 10,
      }}
    >
      <Paper
        sx={{
          padding: 6,
          minHeight: "300px",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 35,
          }}
        >
          <Typography variant="h4" mb={2}>
            Build your dream DAO now
          </Typography>
          <Typography variant="body1" mb={2}>
            Be a DAO leader and start your NFTs investment journey with
            SharedNFT.
          </Typography>
          <Button variant="contained">Build now</Button>
        </Box>
        <Box
          mt={5}
          minHeight="150px"
          sx={{
            position: "relative",
            zIndex: 28,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: 4,
              top: "-10vw",
            }}
          >
            <Image
              width={500}
              height={500}
              src={collectables.src}
              alt="collectables"
            />
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

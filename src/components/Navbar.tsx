import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { CustomConnectButton } from "./CustomConnectButton";

export const Navbar: FC = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        height: "70px",
        px: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 200,
      }}
    >
      <Box>
        <Typography variant="body1" fontWeight={500}>SharedNFT</Typography>
      </Box>
      <Box>
        <CustomConnectButton />
      </Box>
    </Box>
  );
};

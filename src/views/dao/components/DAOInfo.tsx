import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { DAOCard } from "../../../components/DAOCard";
import { InfoCard } from "./InfoCard";

interface DAOInfoProps {
  timechainAddress: string;
  daoCoreAddress: string;
  governanceAddress: string;
  boardingPassAddress: string;
  addressVaultAddress: string;
}

export const DAOInfo: FC<DAOInfoProps> = ({
  timechainAddress,
  daoCoreAddress,
  governanceAddress,
  boardingPassAddress,
  addressVaultAddress,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={0}
          sx={{
            background:
              "linear-gradient(90deg, rgba(187,163,255,1) 0%, rgba(255,200,233,1) 100%)",
            height: "300px",
            width: "100%",
            borderRadius: 4,
          }}
        ></Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <DAOCard
          addressVaultAddress={addressVaultAddress}
          disableLink
          disableHover
        />
        <Box
          sx={{
            mt: 2,
          }}
        >
          <InfoCard
            timechainAddress={timechainAddress}
            daoCoreAddress={daoCoreAddress}
            governanceAddress={governanceAddress}
            boardingPassAddress={boardingPassAddress}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

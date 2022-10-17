import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { DAOCard } from "../../../components/DAOCard";
import { DAO } from "../../../types/DAO";
import { InfoCard } from "./InfoCard";

interface DAOInfoProps {
  dao: DAO;
}

export const DAOInfo: FC<DAOInfoProps> = ({ dao }) => {
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
        <DAOCard dao={dao} disableLink disableHover/>
        <Box
          sx={{
            mt: 2,
          }}
        >
          <InfoCard dao={dao} />
        </Box>
      </Grid>
    </Grid>
  );
};

import { Box, Paper, Typography } from "@mui/material";
import { FC } from "react";

interface InfoCardProps {
  timechainAddress: string;
  daoCoreAddress: string;
  governanceAddress: string;
  boardingPassAddress: string;
}

export const InfoCard: FC<InfoCardProps> = ({
  timechainAddress,
  daoCoreAddress,
  governanceAddress,
  boardingPassAddress,
}) => {
  return (
    <Paper
      sx={{
        padding: 3,
      }}
    >
      <Typography variant="body1">More about this DAO</Typography>
      <Typography variant="body2" mt={3} color="#00000090">
        <Box my={3}>
          <Typography variant="h6">DAO Core</Typography>
          <Typography variant="body2">{daoCoreAddress}</Typography>
        </Box>
        <Box my={3}>
          <Typography variant="h6">Timechain</Typography>
          <Typography variant="body2">{timechainAddress}</Typography>
        </Box>
        <Box my={3}>
          <Typography variant="h6">Governance</Typography>
          <Typography variant="body2">{governanceAddress}</Typography>
        </Box>
        <Box my={3}>
          <Typography variant="h6">Boarding Pass</Typography>
          <Typography variant="body2">{boardingPassAddress}</Typography>
        </Box>
      </Typography>
    </Paper>
  );
};

import { Box, Paper, Typography } from "@mui/material";
import { FC } from "react";

export const Proposal = () => {
  return (
    <Box
      sx={{
        my: 4,
      }}
    >
      <Typography variant="h5">On going proposal</Typography>
      <Box
        sx={{
          my: 2,
        }}
      >
        <BuyProposal />
      </Box>
    </Box>
  );
};

const BuyProposal: FC = () => {
  return (
    <Paper
      sx={{
        p: 4,
      }}
    >
      <Typography variant="body1" fontWeight={600}>
        Buy Proposal
      </Typography>
      <Typography variant="body2" mt={2}>
        This proposal is asking everyone for buying this NFT to the DAO.
      </Typography>
      <Typography variant="body2" mt={2}>
        Proposed by
      </Typography>
      <Typography variant="body2" mt={2}>
        NFT: 
      </Typography>
      <Typography variant="body2" mt={2}>
        Ends in 
      </Typography>
    </Paper>
  );
};

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { BigNumber } from "ethers";
import { FC, useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { useConfig } from "../../../contexts/Config";

interface ProposalProps {
  daoCore: string;
}

export const Proposal: FC<ProposalProps> = ({ daoCore }) => {
  const [expire, setExpire] = useState<BigNumber>(BigNumber.from(0));
  const [proposalAddress, setProposalAddress] = useState<string>("");
  const conf = useConfig()
  const [createProposalDialog, setCreateProposalDialog] =
    useState<boolean>(false);
  const { data: onChainExpire, isLoading: isLoadingExpire } = useContractRead({
    addressOrName: daoCore,
    contractInterface: conf?.abi.DAOCore.default,
    functionName: "currentProposalExpire",
  });

  const { data: onChainProposalAddress, isLoading: isLoadingProposalAddress } =
    useContractRead({
      addressOrName: daoCore,
      contractInterface: conf?.abi.DAOCore.default,
      functionName: "currentProposal",
    });

  const handleClose = () => {
    setCreateProposalDialog(false);
  };

  useEffect(() => {
    setExpire(BigNumber.from(onChainExpire));
  }, [onChainExpire]);

  useEffect(() => {
    setProposalAddress(onChainProposalAddress?.toString() || "");
  }, [onChainProposalAddress]);

  if (isLoadingProposalAddress || isLoadingExpire) {
    return null;
  }

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
        {
          expire.isZero() ? (
            <Box
              sx={{
                my: 4,
              }}
            >
              <Typography>There is no proposal in this DAO.</Typography>
            </Box>
          ) : null // when proposal is available
        }
      </Box>
      <Box
        sx={{
          my: 2,
        }}
      >
        <Stack direction="row" spacing={2}>
          <Button
            size="large"
            variant="contained"
            onClick={() => setCreateProposalDialog(true)}
          >
            Create Buy Proposal
          </Button>
          <Button size="large" variant="contained" disabled>
            Create Sell Proposal
          </Button>
          <Dialog open={createProposalDialog} onClose={handleClose} sx={{
            borderRadius: 4
          }}>
            <DialogTitle>Create new buy proposal</DialogTitle>
            <DialogContent>
              <DialogContentText>
                This will create a proposal which allows every members to vote whether to buy this NFT or not.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="NFT Address"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Token ID"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Buy price (KUB)"
                type="text"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button variant="contained" onClick={handleClose}>Send Proposal</Button>
            </DialogActions>
          </Dialog>
        </Stack>
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

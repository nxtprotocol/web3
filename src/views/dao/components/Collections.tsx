import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BigNumber } from "ethers";
import { FC } from "react";
import { NFTCard } from "../../../components/NFTCard";

interface CollectionsProps {

}

const nftsMock = [
  {
    address: "0xfF2f5342FF8fFfA17a04aA5CbC162001A25B71a7",
    tokenId: BigNumber.from("297533440"),
  },
  {
    address: "0xE8800086dBB8C37Ba1a4f7e43bA1d5152F67a27d",
    tokenId: BigNumber.from("7864320"),
  },
];

export const Collections: FC<CollectionsProps> = ({  }) => {
  return (
    <Box
      sx={{
        my: 2,
      }}
    >
      <Typography variant="h5">Collections</Typography>
      <Box
        sx={{
          my: 2,
        }}
      >
        <Grid container spacing={1}>
          {nftsMock.map((nft, index) => {
            return (
              <Grid item xs={6} md={3} lg={3} key={`collections-${index}`}>
                <NFTCard
                  address={nft.address}
                  tokenId={nft.tokenId}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

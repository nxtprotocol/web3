import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { shortenEthAddress } from "../utils/typography";

interface DAOCardProps {
  addressVaultAddress?: string;
  showImage?: boolean;
  disableLink?: boolean;
  disableHover?: boolean;
}

export const DAOCard: FC<DAOCardProps> = ({ addressVaultAddress, showImage, disableLink, disableHover }) => {
  return (
    <Link
      href={disableLink ? "#" : `/dao/1`} // FIXME:
      sx={{
        textDecoration: "none",
      }}
    >
      <Paper
        sx={{
          padding: 2,
          boxShadow: "0 4px 60px 12px #00000010",
          display: "flex",
          gap: 2,
          transition: "200ms ease",
          cursor: "pointer",
          "&:hover": disableHover ? undefined : {
            transform: "translateY(-12px)",
          },
        }}
      >
        <Box>
          {showImage ? (
            <Paper
              elevation={0}
              sx={{
                background:
                  "linear-gradient(90deg, rgba(187,163,255,1) 0%, rgba(255,200,233,1) 100%)",
                minHeight: "60px",
                minWidth: "60px",
                borderRadius: 2,
              }}
            ></Paper>
          ) : null}
        </Box>
        <Box paddingY={1}>
          <Typography variant="h6">Name</Typography>
          <Typography variant="body2" color="#00000060" fontSize={12}>
            {shortenEthAddress(addressVaultAddress || "")}
          </Typography>
          <Grid container mt={1}>
            <Grid item xs={4}>
              <Typography fontSize={10}>NFTs</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontSize={10}>Members</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontSize={10}>Valuation (KUB)</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontSize={18} fontWeight={600}>
                Mock
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontSize={18} fontWeight={600}>
                Mock
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontSize={18} fontWeight={600}>
                Mock
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Link>
  );
};

import { Box, IconButton, Paper, Tooltip } from "@mui/material";
import axios from "axios";
import { BigNumberish } from "ethers";
import { FC, useEffect, useState } from "react";
import { useERC721 } from "../hooks/useERC721";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface NFTCardProps {
  address: string;
  tokenId: BigNumberish;
}

export const NFTCard: FC<NFTCardProps> = ({ address, tokenId }) => {
  const { data, isLoading, isError } = useERC721(address, tokenId);
  const [imageUrl, setImageUrl] = useState<string>();

  const getImageUrl = async (ipfsUrl: string) => {
    const res = await axios.get<{ image: string }>(ipfsUrl);
    setImageUrl(res.data.image);
  };

  useEffect(() => {
    if (data && typeof data === "string") {
      getImageUrl(data as string);
    }
  }, [data]);

  if (!data || isError || isError || !imageUrl) {
    return null;
  }
  return (
    <Paper
      sx={{
        p: 1,
        minHeight: "100px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          aspectRatio: "1 / 1",
          objectFit: "contain",
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box
        sx={{
          mt: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Tooltip title="Open selling vote on this item.">
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

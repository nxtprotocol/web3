import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import { DAO } from "../../../types/DAO";

interface InfoCardProps {
  dao: DAO;
}

export const InfoCard: FC<InfoCardProps> = ({ dao }) => {
  return (
    <Paper
      sx={{
        padding: 3,
      }}
    >
      <Typography variant="body1">More about this DAO</Typography>
      <Typography variant="body2" mt={3} color="#00000090">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veniam
        rem quod magnam dolor veritatis aspernatur voluptatibus debitis esse
        repellendus repellat commodi reprehenderit, beatae placeat nulla, ipsum,
        quae voluptates eius.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veniam
        rem quod magnam dolor veritatis aspernatur voluptatibus debitis esse
        repellendus repellat commodi reprehenderit, beatae placeat nulla, ipsum,
        quae voluptates eius.
      </Typography>
    </Paper>
  );
};

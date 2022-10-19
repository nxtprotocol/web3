import { Stack, TextField, Container, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSigner } from "wagmi";
import { Navbar } from "../../components/Navbar";
import { useDAOFactory } from "../../hooks/useDAOFactory";

export const CreatePage = () => {
  const { data: signer } = useSigner();

  const [govName, setGovName] = useState<string>("");
  const [govSym, setGovSym] = useState<string>("");
  const [bpName, setBpName] = useState<string>("");
  const [bpSym, setBpSym] = useState<string>("");

  const factory = useDAOFactory();

  const handleGovNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGovName(event.target.value);
  };
  const handleGovSymChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGovSym(event.target.value);
  };
  const handleBpNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBpName(event.target.value);
  };
  const handleBpSymChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBpSym(event.target.value);
  };

  const handleCreateDAO = async () => {
    if (signer) {
      await factory.connect(signer).create(govName, govSym, bpName, bpSym);
      alert("Create Done!!!!!");
    }
  };

  return (
    <>
      <Navbar />
      <Container
        sx={{
          paddingY: "100px",
        }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: "400px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Governance Token Name"
            variant="outlined"
            value={govName}
            onChange={handleGovNameChange}
          />
          <TextField
            id="outlined-basic"
            label="Governance Token Symbol"
            variant="outlined"
            value={govSym}
            onChange={handleGovSymChange}
          />
          <TextField
            id="outlined-basic"
            label="Boardingpass Name"
            variant="outlined"
            value={bpName}
            onChange={handleBpNameChange}
          />
          <TextField
            id="outlined-basic"
            label="Boarding Pass Symbol"
            variant="outlined"
            value={bpSym}
            onChange={handleBpSymChange}
          />
          <Box>
            <Button variant="contained" size="large" onClick={handleCreateDAO}>
              Create
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

import { Button, IconButton } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import PublicIcon from '@mui/icons-material/Public';
export const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
                    type="button"
                    variant="contained"
                  >
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </Button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <Button
                    aria-label="delete"
                    variant="contained"
                    color="secondary"
                    onClick={openChainModal}
                    sx={{
                      borderRadius: 20,
                    }}
                  >
                    <PublicIcon />
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={openAccountModal}
                    type="button"
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    {account.displayName}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

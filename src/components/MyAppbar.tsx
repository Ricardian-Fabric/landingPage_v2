import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const logoStyle = {
  paddingRight: "10px",
};

export default function MyAppBar() {
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: 10, width: "100%" }}>
      <AppBar color="primary">
        <Toolbar>
          <img
            src="https://arweave.net/cGU3w4SlEESxajw-t_mhoBArT7WTwmac1mvjlBqNIi0"
            width="40"
            height="40"
            style={logoStyle}
          />
          <h2>Ricardian Fabric</h2>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

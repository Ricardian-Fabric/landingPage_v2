import * as React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  paddingRight: "5px",
  paddingLeft: "5px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: "#fafafa",
  },
}));

export default function Possibilities() {
  return (
    <div style={{ margin: "0 auto", width: "100%" }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          marginTop: "20px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Item>
          <h4>Rights</h4>
        </Item>
        <Item>
          <h4>Indemnification</h4>
        </Item>
        <Item>
          <h4>Agreements</h4>
        </Item>
      </Stack>
    </div>
  );
}

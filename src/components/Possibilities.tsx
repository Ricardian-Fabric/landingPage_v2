import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
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
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        sx={{
          marginTop: "20px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Item>
          <h4>Intellectual Property Rights</h4>
        </Item>
        <Item>
          <h4>Legally Binding Smart Contracts</h4>
        </Item>
        <Item>
          <h4>Regulated P2P Services</h4>
        </Item>
      </Stack>
    </div>
  );
}

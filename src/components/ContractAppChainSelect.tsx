import * as React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { HARMONYONEISSUERLINK, HARMONYONEDAOLINK } from "../links";
import { Fade, Typography } from "@mui/material";
import Possibilities from "./Possibilities";
import AnimatedContract from "./animatedContract";
const daoButtonStyle = {
  margin: "0 auto",
  marginTop: "10px",
  display: "flex",
  flexDirection: "column",
};

export interface SimpleDialogProps {
  open: boolean;
  dao: boolean;
  onClose: () => void;
}

export interface ContractAppChainSelectProps {
  dao: boolean;
}

enum ListItemChain {
  Harmony,
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value: ListItemChain) => {
    onClose();
    if (value === ListItemChain.Harmony) {
      if (props.dao) {
        window.location.href = HARMONYONEDAOLINK;
      } else {
        window.location.href = HARMONYONEISSUERLINK;
      }
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select DAO Network</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem
          button
          onClick={() => handleListItemClick(ListItemChain.Harmony)}
        >
          <ListItemAvatar>
            <img src="/harmonyOneLogo.svg" width={"30px"} />
          </ListItemAvatar>
          <ListItemText primary={"Harmony One"} />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function ContractAppChainSelect(
  props: ContractAppChainSelectProps
) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (props.dao) {
    return (
      <div>
        <Button
          variant="contained"
          style={daoButtonStyle}
          onClick={handleClickOpen}
        >
          <img src="/DAO.png" width="50px" />
          <small>Click to enter the DAO</small>
        </Button>
        <SimpleDialog dao={props.dao} open={open} onClose={handleClose} />
      </div>
    );
  } else {
    return (
      <div>
        <div className={"seventeen"}>
          <Fade in={true} timeout={4000}>
            <Button variant="contained" onClick={handleClickOpen}>
              <AnimatedContract></AnimatedContract>
              <img
                width="150px"
                src="/issueContract.png"
                alt="Issue a Legal Contract with a Smart Contract!"
              />
            </Button>
          </Fade>
        </div>
        <Possibilities></Possibilities>
        <Typography variant="subtitle1" component="p">
          Run a business on No-Code Smart Contracts
        </Typography>
        <SimpleDialog dao={props.dao} open={open} onClose={handleClose} />
      </div>
    );
  }
}

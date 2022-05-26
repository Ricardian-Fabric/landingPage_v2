import { Button, Fade, Typography } from "@mui/material";
import React from "react";
import { PageTitleShadow } from "../pages";
import IssuerAnimation from "./IssuingAnimation";
import Possibilities from "./Possibilities";
import Spacer from "./Spacer";

export const HowItWorks = () => (
  <Fade in={true} timeout={4000}>
    <Button variant="contained" href="https://docs.ricardianfabric.com">
      How it works?
    </Button>
  </Fade>
);

export const IssueLegalContract = () => (
  <React.Fragment>
    <div>
      <IssuerAnimation />
      <Typography variant="h3" component="h3" style={PageTitleShadow}>
        A Framework For Creating No-Code DeFi Apps
      </Typography>
    </div>
  </React.Fragment>
);

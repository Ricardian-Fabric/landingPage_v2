import { Button, Fade, Typography } from "@mui/material";
import React from "react";
import { PageTitleShadow } from "../pages";
import IssuerAnimation from "./IssuingAnimation";

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
      <Typography variant="h5" component="h5">
        A Framework For Creating No-Code DeFi Apps
      </Typography>
    </div>
  </React.Fragment>
);

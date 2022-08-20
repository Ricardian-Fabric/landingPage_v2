import { Button, Fade, Typography } from "@mui/material";
import React from "react";

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
      {/* <IssuerAnimation /> */}
      <Typography variant="h2" component="h2">
        An Agreement Protocol for the new open web.
      </Typography>
    </div>
  </React.Fragment>
);

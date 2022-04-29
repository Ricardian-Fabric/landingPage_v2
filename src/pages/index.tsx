import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";
import MyAppBar from "../components/MyAppbar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Button,
  Container,
  Divider,
  Fade,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import IssuerAnimation from "../components/IssuingAnimation";
import { IssuerInformation } from "../components/IssuerInformation";
import Possibilities from "../components/Possibilities";
import Spacer from "../components/Spacer";
import { Roadmap } from "../components/Roadmap";
// styles

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
    },
  },
});

const PageTitleShadow = {
  textShadow: "2px 2px #999999",
};

const daoButtonStyle = {
  margin: "0 auto",
  marginTop: "10px",
  display: "flex",
  flexDirection: "column",
};

const unstoppobleTypography = {
  marginTop: "20px",
  marginBottom: "20px",
  textShadow: "2px 2px #999999",
};

const row = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
};

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MyAppBar></MyAppBar>
      <Container>
        <Paper
          elevation={3}
          sx={{
            padding: 10,
            borderRadius: "25px",
            textAlign: "center",
          }}
        >
          <Fade in={true} timeout={4000}>
            <img
              width="100%"
              src="/static/IssueALegalContractWithASmartContract.png"
            />
          </Fade>

          <Button
            color="inherit"
            href="https://ervded4meifzaaglk6j5sxqmioenu4ibajhx4o3m7x2stsbi.arweave.net/JGoyD4wiC5AAy1eT-2V4MQ4jacQECT347bP-31Kcgo8"
          >
            <IssuerAnimation></IssuerAnimation>
          </Button>
          <Fade in={true} timeout={4000}>
            <Typography variant="caption" display="block" gutterBottom>
              Click on the image to enter the DApp!
            </Typography>
          </Fade>
          <Typography variant="h3" component="h3" style={PageTitleShadow}>
            A Framework for creating Legal P2P Services with Smart Contracts
          </Typography>
          <IssuerInformation></IssuerInformation>
        </Paper>
        <Possibilities></Possibilities>
        <Paper
          elevation={3}
          sx={{
            marginTop: 5,
            padding: 10,
            borderRadius: "25px",
            textAlign: "center",
          }}
        >
          <img src="/static/on-chain-agreements.png" />
          <img src="/static/signerBG.jpg" width="100%"></img>
          <Typography variant="h3" component="h3" style={PageTitleShadow}>
            An Agreement Protocol for the New Open Web
          </Typography>
          <Button
            variant="contained"
            href="https://docs.ricardianfabric.com/guides/ricardian-contracts"
          >
            Sign agreements on-chain using Ricardian Contracts!
          </Button>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            marginTop: 5,
            padding: 10,
            borderRadius: "25px",
            textAlign: "center",
          }}
        >
          <img width="300px" src="/static/PoweredByThePermaweb.png" />

          <img src="/static/legalDocument.jpg" width="100%" />
          <Typography variant="h3" component="h3" style={PageTitleShadow}>
            Permanent Document Storage
          </Typography>
          <Typography variant="body1" component="div">
            Leverage the Power of the Permaweb. Pay once and store your
            documents forever using the Arweave Blockweave.
          </Typography>
          <Button
            variant="contained"
            href="https://docs.ricardianfabric.com/guides/permaweb"
          >
            Docs
          </Button>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            marginTop: 5,
            padding: 10,
            borderRadius: "25px",
            textAlign: "center",
          }}
        >
          <img
            src="/static/DecentralizedAutonomousOrganization.png"
            width="100%"
          />
          <Typography variant="h3" component="h3" style={unstoppobleTypography}>
            Unstoppoble and built on blockchains.
          </Typography>

          <div style={row}>
            <img src="/static/harmony-one-logo.png" width="200px" />
            <img src="/static/arweave-logo.svg" width="200px" />
          </div>
          <Spacer />
          <Button
            variant="contained"
            href="https://docs.ricardianfabric.com/guides/economics/buying-ric"
          >
            Find out more about the utility token
          </Button>
        </Paper>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" style={daoButtonStyle}>
            <img src="/static/DAO.png" width="100px" />
            <small>Click to enter the DAO</small>
          </Button>
        </div>

        <Paper
          elevation={3}
          sx={{
            marginTop: 5,
            padding: 10,
            borderRadius: "25px",
            textAlign: "center",
          }}
        >
          <img src="/static/BuilderGuildAndDao.png" width="300px" />
          <Spacer></Spacer>
          <img src="/static/codeHead.png" height="300px" />
          <Typography variant="h3" component="h3" style={PageTitleShadow}>
            The Builder Guild allows anybody to contribute to the application!
          </Typography>

          <Button
            variant="contained"
            href="https://docs.ricardianfabric.com/guides/dao"
          >
            Docs
          </Button>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            marginTop: 5,
            padding: 10,
            borderRadius: "25px",
            textAlign: "center",
          }}
        >
          <img src="static/Roadmap.png" width="100px" />
          <Roadmap></Roadmap>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            marginTop: 5,
            padding: 10,
            borderRadius: "25px",
            textAlign: "center",
          }}
        >
          <img src="/static/FollowUs.png" width="300px" />
          <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
            <Button href="https://discord.gg/Z7eeksAzdh">
              <img src="/static/Discord-Logo-Black.png" width="50px" />
            </Button>
            <Button href="https://twitter.com/RicardianFabric?ref_src=twsrc%5Etfw">
              <img src="/static/2021_Twitter_logo-blue.png" width="50px" />
            </Button>
          </Stack>

          <Typography variant="subtitle2" component="div">
            Feel free to reach out to us at admin@ricardianfabric.com
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default IndexPage;

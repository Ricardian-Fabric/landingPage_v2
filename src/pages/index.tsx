import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";
import MyAppBar from "../components/MyAppbar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button, Divider, Fade, Paper, Typography, Stack } from "@mui/material";
import Possibilities from "../components/Possibilities";
import Spacer from "../components/Spacer";
import { Roadmap } from "../components/Roadmap";
import ContractAppChainSelect from "../components/ContractAppChainSelect";
import { Helmet } from "react-helmet";
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        },
      },
    },
  },
});

const PageTitleShadow = {
  textShadow: "2px 2px #999999",
  fontSize: "2em",
};

const unstoppobleTypography = {
  marginTop: "20px",
  marginBottom: "20px",
  textShadow: "2px 2px #999999",
  color: "red",
};

const row = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const imageBorder = {
  borderRadius: "25px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
};

const PaperWrap = (props: { children: React.ReactNode }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: "25px",
        textAlign: "center",
        width: "100%",
        maxWidth: "800px",
        minWidth: "300px",
        alignSelf: "center",
      }}
    >
      <Divider></Divider>
      <Spacer></Spacer>
      {props.children}
      <Spacer></Spacer> <Divider></Divider>
    </Paper>
  );
};

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ricardian Fabric</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://arweave.net/cGU3w4SlEESxajw-t_mhoBArT7WTwmac1mvjlBqNIi0"
        />
      </Helmet>
      <MyAppBar></MyAppBar>
      <Stack spacing={2}>
        <PaperWrap>
          <Fade in={true} timeout={4000}>
            <img
              width="100%"
              src="/IssueALegalContractWithASmartContract.png"
              alt="Issue a Legal Contract with a Smart Contract!"
            />
          </Fade>
          <ContractAppChainSelect dao={false}></ContractAppChainSelect>

          <Fade in={true} timeout={4000}>
            <Typography variant="caption" display="block" gutterBottom>
              Click on the image to enter the DApp!
            </Typography>
          </Fade>
          <Typography variant="h3" component="h3" style={PageTitleShadow}>
            A Framework for creating Legal P2P Services with Smart Contracts
          </Typography>
          <Fade in={true} timeout={4000}>
            <Button variant="contained" href="https://docs.ricardianfabric.com">
              How it works?
            </Button>
          </Fade>
          <Possibilities></Possibilities>
        </PaperWrap>
        <PaperWrap>
          <Typography variant="h3" component="h3" style={PageTitleShadow}>
            An Agreement Protocol for the New Open Web
          </Typography>
          <Spacer></Spacer>
          <img
            src="/on-chain-agreements.png"
            width="300px"
            alt="On-Chain Agreements"
          />
          <Spacer></Spacer>
          <img src="/signerBG.jpg" width="300px" style={imageBorder}></img>
          <Spacer></Spacer>
          <Button
            variant="contained"
            href="https://docs.ricardianfabric.com/guides/ricardian-contracts"
          >
            Sign agreements on-chain using Ricardian Contracts!
          </Button>
        </PaperWrap>

        <PaperWrap>
          <Typography variant="h3" component="h3" style={PageTitleShadow}>
            Business as usual.
          </Typography>
          <Spacer></Spacer>
          <img
            src="/BusinessAsUsual.jpg"
            width="300px"
            style={imageBorder}
            alt="Business as Usual."
          />
          <Spacer></Spacer>
          <Typography variant="h3" component="h3" style={PageTitleShadow}>
            Adopt innovation.
          </Typography>
          <Spacer></Spacer>
          <img
            src="/RunYourCompanyOnSmartContracts.png"
            width="300px"
            alt="Run Your Company On Smart Contracts"
          />
        </PaperWrap>

        <PaperWrap>
          <Typography variant="h3" component="h3" style={PageTitleShadow}>
            Permanent Document Storage
          </Typography>
          <Spacer></Spacer>
          <img
            width="300px"
            src="/PoweredByThePermaweb.png"
            alt="Powered by the permaweb"
          />
          <Spacer></Spacer>
          <Typography variant="body1" component="div">
            Leverage the Power of the Permaweb. Pay once and store your
            documents forever using the Arweave Blockweave.
          </Typography>
          <Button
            variant="contained"
            href="https://docs.ricardianfabric.com/guides/permaweb"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img
                style={{ margin: "0 auto" }}
                src="/arweaveLogoIcon.svg"
                alt="a"
                width="50px"
              />
              Burner Wallet Docs
            </div>
          </Button>
        </PaperWrap>
        <PaperWrap>
          <Typography variant="h3" component="h3" style={PageTitleShadow}>
            Leave a Transparent Audit Trail
          </Typography>
          <Spacer></Spacer>
          <img src="/TransparentBubble.jpg" width="300px" style={imageBorder} />
          <Spacer></Spacer>
          <Typography variant="body1" component="div">
            Create Trails to Organize your Permaweb Uploads!
          </Typography>
          <Button
            variant="contained"
            href="https://docs.ricardianfabric.com/guides/trails"
          >
            Find out more
          </Button>
        </PaperWrap>
        <PaperWrap>
          <img
            src="/DecentralizedAutonomousOrganization.png"
            width="100%"
            alt="Decentralized Autonomous Organization"
          />
          <Typography variant="h3" component="h3" style={unstoppobleTypography}>
            Unstoppable and built on blockchains.
          </Typography>

          <div style={row}>
            <img
              src="/harmony-one-logo.png"
              width="150px"
              alt="Harmony One logo"
            />
            <img src="/arweave-logo.svg" width="150px" alt="Arweave logo" />
          </div>
          <Spacer />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <ContractAppChainSelect dao={true}></ContractAppChainSelect>
          </div>
        </PaperWrap>

        <PaperWrap>
          <Typography variant="h3" component="h3" style={PageTitleShadow}>
            The Builder Guild allows anybody to contribute to the application!
          </Typography>

          <Spacer></Spacer>
          <img
            src="/codeHead.png"
            height="300px"
            style={imageBorder}
            alt="Earn to develop"
          />
          <Spacer></Spacer>
          <Button
            variant="contained"
            href="https://docs.ricardianfabric.com/guides/dao"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img src="/BuilderGuildAndDao.png" width="300px" />
              Docs
            </div>
          </Button>
          <Spacer></Spacer>
        </PaperWrap>
        <PaperWrap>
          <img src="/Roadmap.png" width="100px" alt="Roadmap" />
          <Spacer></Spacer>
          <Roadmap></Roadmap>
        </PaperWrap>
        <PaperWrap>
          <img src="/FollowUs.png" width="100px" alt="Follow us" />
          <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
            <Button href="https://discord.gg/Z7eeksAzdh">
              <img src="/Discord-Logo-Black.png" width="50px" />
            </Button>
            <Button href="https://twitter.com/RicardianFabric?ref_src=twsrc%5Etfw">
              <img src="/2021_Twitter_logo-blue.png" width="50px" />
            </Button>
          </Stack>

          <Typography variant="subtitle2" component="div">
            Feel free to reach out to us at admin@ricardianfabric.com
          </Typography>
        </PaperWrap>
        <Spacer />
      </Stack>
    </ThemeProvider>
  );
};

export default IndexPage;

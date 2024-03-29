import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";
import MyAppBar from "../components/MyAppbar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button, Paper, Typography, Stack, Fade } from "@mui/material";
import Spacer from "../components/Spacer";
import ContractAppChainSelect from "../components/ContractAppChainSelect";
import { Helmet } from "react-helmet";
import { IssueLegalContract } from "../components/howItWorks";
import PermapinLogo from "../components/permapinLogo";
import ParticlesComponent from "../components/Particles";
import AnimatedContract from "../components/animatedContract";
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

export const PageTitleShadow = {
  textShadow: "2px 2px #999999",
  fontSize: "2em",
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
  flexWrap: "wrap",
};

const imageBorder = {
  borderRadius: "25px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
};

const marginRight2px = {
  marginRight: "10px",
};

const buyLogo = {
  fontSize: "20px",
  marginRight: "10px",
};

const marginLeftAndRight2px = {
  marginLeft: "2px",
  marginRight: "2px",
};

const daoimage = {
  maxWidth: "500px",
};

const PaperWrap = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Paper
      className={props.className}
      elevation={0}
      sx={{
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: "center",
        width: "100%",
        minWidth: "300px",
        alignSelf: "center",
      }}
    >
      <Spacer></Spacer>
      {props.children}
      <Spacer></Spacer>
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
      <div>
        <MyAppBar></MyAppBar>
        <ParticlesComponent></ParticlesComponent>
        <Stack spacing={2}>
          <PaperWrap>
            <IssueLegalContract />
            <Typography
              variant="h3"
              component="h3"
              style={PageTitleShadow}
            ></Typography>
            <Spacer></Spacer>
            <div className={"seventeen"}>
              <Fade in={true} timeout={4000}>
                <Button
                  variant="contained"
                  href="https://app.ricardianfabric.com"
                >
                  <AnimatedContract></AnimatedContract>
                  <h3>Issue a contract</h3>
                </Button>
              </Fade>
            </div>
          </PaperWrap>
          <PaperWrap>
            <ContractAppChainSelect dao={false}></ContractAppChainSelect>
          </PaperWrap>
          <PaperWrap>
            <Typography variant="h6" component="h6">
              React Component
            </Typography>
            <Spacer></Spacer>
            <Button variant="contained" href="https://www.npmjs.com/package/@ricardianfabric/react-components">Add the published contract to your React Dapp!</Button>
          </PaperWrap>
          <PaperWrap>
            <PermapinLogo></PermapinLogo>
            <Typography variant="h6" component="h6">
              Permanent Document Storage
            </Typography>
            <Spacer></Spacer>
            <Typography variant="body1" component="div">
              Store your Ricardian Contracts on the Arweave Blockweave.
            </Typography>
            <Button
              variant="contained"
              href="https://docs.ricardianfabric.com/guides/permaweb"
            >
              Powered by the Permaweb
            </Button>
          </PaperWrap>
          <PaperWrap>
            <Typography variant="h6" component="h6">
              Decentralized Autonomous Organization
            </Typography>
            <Typography variant="subtitle1" component="p">
              A Perpetual Hackathon DAO to accelerate the development of Ricardian Fabric based DApps.
            </Typography>

            <div style={{ ...row, maxWidth: "500px", margin: "0 auto" }}>
              <img
                src="/polygon-logo-black.svg"
                width="100px"
                alt="Polygon logo"
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
            <Typography variant="h6" component="h6">
              Develop No-Code DApps.
            </Typography>
            <Typography variant="subtitle1" component="p">
              Earn tokens from the DAO by contributing to the application via a
              built in automated Hackathon!
            </Typography>
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
                <img className="center" src="/DAO.png" width="50px" />
                <small>Docs</small>
              </div>
            </Button>
            <Spacer></Spacer>
          </PaperWrap>
          {/* <PaperWrap>
            <Spacer></Spacer>
            <Button href="https://global.transak.com/" variant="contained">
              <h5 style={buyLogo}>Buy</h5>
              <img
                src="./harmonyOneLogo.svg"
                style={marginRight2px}
                width="20px"
              />
              Harmony One and{" "}
              <img
                style={marginLeftAndRight2px}
                src="arweaveLogoIcon.svg"
                width="20px"
              />{" "}
              Arweave here
            </Button>

            <Spacer></Spacer>
          </PaperWrap> */}
          {/* <PaperWrap>
            <img src="/ComingSoon.png" width="200px" alt="Coming Soon" />
            <Spacer></Spacer>
            <Typography variant="subtitle1" component="p">
              Escrow Service, NFT with Rights, zkKYC
            </Typography>
          </PaperWrap> */}
          <PaperWrap>
            <Typography variant="h6" component="h6" >
              Follow
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button href="https://discord.gg/Z7eeksAzdh">
                <img src="/Discord-Logo-Black.png" width="50px" />
              </Button>
              <Button href="https://twitter.com/RicardianFabric?ref_src=twsrc%5Etfw">
                <img src="/2021_Twitter_logo-blue.png" width="50px" />
              </Button>
            </Stack>

            <Typography variant="subtitle2" component="div">
              Feel free to reach out: admin@ricardianfabric.com
            </Typography>
            <Spacer></Spacer>

          </PaperWrap>
          <Spacer />
        </Stack>
      </div>
    </ThemeProvider>
  );
};

export default IndexPage;

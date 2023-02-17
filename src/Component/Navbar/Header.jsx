import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Paper,
  Box,
  Button,
  Container,
  Typography,
  Hidden,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import logo from "../../images/logo.png";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
// import logo from "../images/logo.png";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#000000 !important",
    justifyContent: "center",
  },
});

export default function Header() {
  //////////Active and disactive//////
  const styledactivelink = ({ isActive }) => {
    return {
      textDecoration: "none",
      textTransform: "capitalize",
      textAlign: "center",
      textDecoration: "none",
      cursor: "pointer",
      color: isActive ? "#00D9AC" : "white",
      fontSize: "18px",
      width: "100%",
    };
  };
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const walletStyle = {
    border: "1px solid white",
    borderRadius: "5px",
    color: "white",
    padding: "2px 5px",
    background: `linear-gradient(90deg, rgba(0,104,68,0.8046568969384629) 0%, rgba(75,6,84,0.6646008745294993) 57%)`,
    "&:hover": {
      background: `linear-gradient(90deg, rgba(75,6,84,0.6646008745294993) 0%,rgba(0,104,68,0.8046568969384629) 57%)`,
    },
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  ////////////////Resend link end here/////////
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box mt={-35} display="flex" justifyContent="center">
        <Link to="/">
          <img width="180px" src={logo} alt="Logo" />
        </Link>
      </Box>

      <List>
        <ListItem>
          <NavLink to="/" style={styledactivelink}>
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/Games" style={styledactivelink}>
            Games
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/Blackspider" style={styledactivelink}>
            NFT
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/events" style={styledactivelink}>
            Events
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/merchs" style={styledactivelink}>
            MERCHS
          </NavLink>
        </ListItem>
        <ListItem
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Button style={walletStyle} sx={{ width: "80%" }}>
            WALLETS
          </Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "100%",
          position: "fixed",
          backgroundColor: "rgba(0,0,0,0.9)",
          color: "white",
          fontWeight: 900,
          py: 3,
          fontSize: "26px",
          // zIndex: "1",
          marginBottom: "10px",
        }}
        height="52px"
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Hidden mdDown>
              <Box
                sx={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <NavLink to="/" style={styledactivelink}>
                  <Typography sx={{ fontSize: "20px" }}>HOME</Typography>
                </NavLink>
                <NavLink to="/Games" style={styledactivelink}>
                  <Typography sx={{ fontSize: "20px" }}>GAMES</Typography>
                </NavLink>
                <NavLink to="/Blackspider" style={styledactivelink}>
                  <Typography sx={{ fontSize: "20px" }}>NFT</Typography>
                </NavLink>
              </Box>
            </Hidden>
            <Hidden mdDown>
              <Box sx={{ width: "30%", textAlign: "center" }}>
                <img
                  src={logo}
                  style={{ position: "relative", width: "100%" }}
                  alt="Landing page logo"
                />
              </Box>
            </Hidden>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              width="30%"
            >
              <Hidden mdDown>
                <Box
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  width="100%"
                >
                  <NavLink to="/events" style={styledactivelink}>
                    <Typography sx={{ fontSize: "20px" }}>Events</Typography>
                  </NavLink>
                  <NavLink to="/merchs" style={styledactivelink}>
                    <Typography sx={{ fontSize: "20px" }}>MERCHS</Typography>
                  </NavLink>

                  <Button style={walletStyle}>WALLETS</Button>
                </Box>
              </Hidden>
              <Hidden mdUp>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        style={{
                          fontSize: "38px",
                          cursor: "pointer",
                          color: "#fff",
                        }}
                      />
                    </Button>
                    <Paper>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

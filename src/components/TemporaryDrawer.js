import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core"; //giving effect to button
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

import Divider from "@material-ui/core/Divider"; //for line under google doc

import formimage from "./images/form.jpeg";
import excelsheetimage from "./images/excel.png";
import docimage from "./images/doc.png";
import slideimage from "./images/slides.png";
import driveimage from "./images/drive.png";

import { FiSettings } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";

import "./drawer.css";
const useStyles = makeStyles({
  ListItem: {
    marginLeft: "30px",
    marginTop: "-29px",
    fontSize: "14px",
    fontWeight: "500",
    color: "grey",
  },
  slideImages: {
    height: "35px",
    width: "30px",
  },
});

function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{ width: "250px" }} role="presentation">
      <Divider />
      <List>
        <ListItem>
          <ListItemText style={{ fontsize: "480px", marginLeft: "5px" }}>
            <span
              style={{
                color: "blue",
                fontWeight: "700",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial,sans-serif",
              }}
            >
              G
            </span>
            <span
              style={{
                color: "red",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial,sans-serif",
              }}
            >
              o
            </span>
            <span
              style={{
                color: "yellow",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial,sans-serif",
              }}
            >
              o
            </span>
            <span
              style={{
                color: "blue",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial,sans-serif",
              }}
            >
              g
            </span>
            <span
              style={{
                color: "green",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial,sans-serif",
              }}
            >
              l
            </span>
            <span
              style={{
                color: "red",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial,sans-serif",
              }}
            >
              e
            </span>
            <span
              style={{
                color: "#5f6368",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial,sans-serif",
              }}
            >
              Docs
            </span>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List
        style={{ marginLeft: "8px", marginRight: "8px", marginTop: "15px" }}
      >
        <ListItem className="list_item ">
          <img src={docimage} alt="lol" className={classes.slideImages} />
          <div className={classes.ListItem}>Docs</div>
        </ListItem>
        <ListItem className="list_item ">
          <img
            src={excelsheetimage}
            alt="lol"
            className={classes.slideImages}
          />
          <div className={classes.ListItem}>Sheets</div>
        </ListItem>
        <ListItem className="list_item ">
          <img src={slideimage} alt="lol" className={classes.slideImages} />
          <div className={classes.ListItem}>Slides</div>
        </ListItem>
        <ListItem className="list_item ">
          <img src={formimage} alt="lol" className={classes.slideImages} />
          <div className={classes.ListItem}>Forms</div>
        </ListItem>
      </List>
      <Divider />
      <List
        style={{ marginLeft: "08px", marginRight: "08px", marginTop: "15px" }}
      >
        <ListItem className="list_item ">
          <FiSettings />
          <div style={{ marginLeft: "20px", marginTop:"-20px", fontSize: "14px" }}>Settings</div>
        </ListItem>

        <ListItem className="list_item ">
          <BsQuestionCircle />
          <div
            style={{
              marginLeft: "20px",
               marginTop:"-20px",
              fontSize: "14px",
              fontWeight: "500",
              color: "grey",
            }}
          >
            Help & Feedback
          </div>
        </ListItem>
      </List>

      <Divider />
      <List
        style={{ marginLeft: "08px", marginRight: "08px", marginTop: "15px" }}
      >
        <ListItem className="list_item ">
          <img
            src={driveimage}
            alt="lol"
            style={{ height: "40px", width: "30px" }}
          />
          <div style={{ marginLeft: "30px", marginTop:"-30px",fontSize: "14px" }}>Drive</div>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          anchor={"left"}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default TemporaryDrawer;

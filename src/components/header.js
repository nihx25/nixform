import React from "react";
import "./header.css";
import { IconButton } from "@material-ui/core";
import formimage from "./images/form.jpeg";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import avatarimage from "./images/avt.jpeg";
import TemporaryDrawer from "./TemporaryDrawer";
function header() {
  return (
    <div className="Head">
      <div className="header_info">
        <TemporaryDrawer/>
        <img src={formimage} style={{height:'40px',width:"40px"}} className="form_image"alt="no" />
        <div className="info">
          Forms
        </div>
      </div>
      <div className="header_search">
        <IconButton>
        <SearchIcon />
        </IconButton>
        <input type="text" name="search" placeholder="search" />
      
        
      </div>
      <div className="header_right">
        {/* will have the app menu and avatar image */}
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Avatar src={avatarimage} />
        </IconButton>
      </div>
    </div>
  );
}

export default header;

import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import uuid from "react-uuid";
import "./template.css";

import blank from "./images/blank.png";
import party from "./images/party.png";
import contact from "./images/contact.png";

function template() {
  const createForm = () => {
   const id=uuid();
   console.log(id)
  }
  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span style={{ fontSize: "16px", color: "#202124" }}>
            Start New form
          </span>
        </div>

        <div className="template_right">
          <div className="gallery_button">
            Template gallery
            <UnfoldMoreIcon fontSize="small" />
          </div>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="template_body">
        <div className="card" onClick={createForm}>
          <img src={blank} alt="blank" className="card_image" />
          <p className="card_title">Blank</p>
        </div>
        <div className="card">
          <img src={party} alt="blank" className="card_image" />
          <p className="card_title">Party Invite</p>
        </div>
        <div className="card">
          <img src={contact} alt="blank" className="card_image" />
          <p className="card_title">Contact Information</p>
        </div>
      </div>
    </div>
  );
}

export default template;

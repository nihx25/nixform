import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

function template() {
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
            <UnfoldMoreIcon />
          </div>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className="template_body"></div>
    </div>
  );
}

export default template;

import React from "react";
import Button from "@material-ui/core/Button";

function BakelsLinks() {
  return (
    <>
      <div className="button-group">
        <Button
          style={{
            backgroundColor: "#ffde59",
            paddingLeft: "7vh",
            paddingRight: "7vh",
            marginTop: "10px",
          }}
          size="large"
          variant="contained"
          href="https://github.com/RebeccaBakels"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Button>
        <Button
          style={{
            backgroundColor: "#ff9659",
            paddingLeft: "7vh",
            paddingRight: "7vh",
            marginTop: "10px",
          }}
          size="large"
          variant="contained"
          href="https://www.linkedin.com/in/rebecca-bakels/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </Button>
        <Button
          style={{
            backgroundColor: "#ff6859",
            paddingLeft: "7vh",
            paddingRight: "7vh",
            marginTop: "10px",
          }}
          size="large"
          variant="contained"
          href="https://firebasestorage.googleapis.com/v0/b/bocacode-fb.appspot.com/o/candidates%2Fresumes%2FBakels_Resume_2021.pdf?alt=media"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </Button>
      </div>
    </>
  );
}

export default BakelsLinks;

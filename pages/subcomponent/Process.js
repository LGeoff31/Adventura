import React from "react";
import { Stack, Typography, Button, TextField } from "@mui/material";

const Process = ({ step, description1, description2, image2 }) => {
  return (
    <Stack marginTop="4rem">
      <Typography
        marginTop="1rem"
        display="flex"
        justifyContent="center"
        variant="h4"
      >
        STEP {step}:{" "}
        <span style={{ color: "#3492C7" }}>&nbsp; {description1}</span>
      </Typography>
      <Typography
        paddingTop="1rem"
        variant="h4"
        margin="0 auto"
        color="grey"
        fontSize="1.5rem"
      >
        {description2}
      </Typography>
      {image2 !== "none" && (
        <img
          src={image2}
          alt="step1"
          width={500}
          style={{ display: "flex", margin: "0 auto" }}
        />
      )}
    </Stack>
  );
};

export default Process;

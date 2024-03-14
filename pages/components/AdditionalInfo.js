import React from "react";
import { Stack, Typography, Button, TextField } from "@mui/material";

const AdditionalInfo = () => {
  return (
    <Stack>
      <Typography
        display="flex"
        justifyContent="center"
        marginTop="3rem"
        marginBottom="2rem"
        variant="h4"
        fontWeight="bold"
      >
        Ready To start?
      </Typography>
      <Button
        variant="contained"
        sx={{
          borderRadius: "2rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
          textTransform: "none",
          height: "4rem",
          margin: "0 auto",
          fontSize: "1.25rem",
        }}
      >
        Create a Room
      </Button>
      <Typography
        display="flex"
        justifyContent="center"
        marginTop="5rem"
        marginBottom="2rem"
        variant="h4"
      >
        Joining an Existing Room?
      </Typography>
      <TextField
        placeholder="Code"
        sx={{
          "& fieldset": { border: "none" },
          borderRadius: "2rem",
          margin: "0 auto",
          marginBottom: "2rem",
          height: "4rem",
          width: "14.5rem",
          background: "rgba(255, 253, 208)",
          border: "none",
        }}
        inputProps={{
          style: {
            textTransform: "uppercase",
            color: "black",
            fontSize: "1.25rem",
            textAlign: "center",
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          borderRadius: "2rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
          textTransform: "none",
          height: "4rem",
          margin: "0 auto",
          fontSize: "1.25rem",
          marginBottom: "5rem",
        }}
      >
        Join Room
      </Button>
      <img
        src="user-steps.png"
        alt="user-group"
        width={"750rem"}
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          marginBottom: "2rem",
        }}
      />
      <Typography
        display="flex"
        variant="h2"
        justifyContent="center"
        color="white"
        fontWeight={400}
        width={"70%"}
        borderRadius={"2rem"}
        margin="0 auto"
        marginBottom="2rem"
        sx={{
          background: "#052A42",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}
      >
        Find the latest trends
      </Typography>
      <img
        src="user-group.png"
        alt="user-group"
        width={"750rem"}
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          marginBottom: "2rem",
        }}
      />
      <Typography
        display="flex"
        variant="h2"
        justifyContent="center"
        color="white"
        fontWeight={400}
        width={"70%"}
        borderRadius={"2rem"}
        margin="0 auto"
        marginBottom="2rem"
        sx={{
          background: "#9F7F2A",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}
      >
        Connect With Friends
      </Typography>
    </Stack>
  );
};

export default AdditionalInfo;

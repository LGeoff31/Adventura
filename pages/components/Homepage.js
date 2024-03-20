import React from "react";
import { Stack, Typography, Button, TextField } from "@mui/material";

const Homepage = () => {
  return (
    <Stack
      sx={{
        height: "100%",
        background: "#00316e",
        paddingBottom: "4rem",
      }}
    >
      <img
        className="homepage-img"
        src="adventura_white.jpg"
        alt="group"
        width={400}
        height={350}
        style={{ marginTop: "4rem", margin: "0 auto" }}
      />
      <Typography
        display="flex"
        justifyContent="center"
        marginTop="3rem"
        marginBottom="2rem"
        variant="h5"
        color="white"
        fontWeight="bold"
        className="Sub-title-homepage"
      >
        Ready To start?
      </Typography>
      <Button
        className="homepage-first-button"
        variant="contained"
        sx={{
          borderRadius: "2rem",
          paddingRight: "2.5rem",
          paddingLeft: "2.5rem",
          textTransform: "none",
          height: "4rem",
          margin: "0 auto",
          fontSize: "1rem",
          marginBottom: "5.5rem"
        }}
      >
        Create a Room
      </Button>
      <Typography
        display="flex"
        justifyContent="center"
        marginTop="5rem"
        marginBottom="2rem"
        variant="h5"
        color="white"
        fontWeight="bold"
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
        }}
      >
        Join Room
      </Button>
    </Stack>
  );
};

export default Homepage;

import React from "react";
import { Stack, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
        src="main.png"
        alt="group"
        width={200}
        height={400}
        style={{ marginTop: "-6rem", margin: "0 auto" }}
      />
      <Typography
        display="flex"
        justifyContent="center"
        marginTop="-5rem"
        marginBottom="2rem"
        variant="h6"
        color="white"
        className="Sub-title-homepage"
      >
        Ready To start?
      </Typography>
      <Button
        variant="contained"
        sx={{
          borderRadius: "2rem",
          paddingRight: "2.3rem",
          paddingLeft: "2.3rem",
          textTransform: "none",
          height: "3rem",
          margin: "0 auto",
          fontSize: "1rem",
          marginBottom: "5.5rem"
        }}
      >
        Create Room
      </Button>
      <Typography
        display="flex"
        justifyContent="center"
        marginTop="5rem"
        marginBottom="2rem"
        variant="h6"
        color="white"
      >
        Joining an Existing Room?
      </Typography>
      <TextField
        placeholder="Enter Code"
        sx={{
          "& fieldset": { border: "none" },
          borderRadius: "2rem",
          margin: "0 auto",
          marginBottom: "2rem",
          height: "3em",
          width: "10.8rem",
          background: "rgba(255, 253, 208)",
          border: "none",
        }}
        inputProps={{
          style: {
            textTransform: "uppercase",
            color: "darkblue",
            fontSize: "0.9rem",
            textAlign: "center",
            marginTop: "-0.1rem",
          },
        }}
      />
      <Button
        
        variant="contained"
        sx={{
          borderRadius: "2rem",
          paddingLeft: "2.3rem",
          paddingRight: "2.3rem",
          textTransform: "none",
          height: "3rem",
          margin: "0 auto",
          fontSize: "1rem",
        }}
      >
        Join a Room
      </Button>
    </Stack>
  );
};

export default Homepage;

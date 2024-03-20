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
        src="adventura.png"
        alt="group"
        width={200}
        height={400}
        style={{ marginTop: "-7rem", margin: "0 auto" }}
      />
      <Typography
        display="flex"
        justifyContent="center"
        marginTop="0rem"
        marginBottom="2rem"
        variant="h5"
        color="white"
        fontWeight="bold"
        className="Sub-title-homepage"
      >
        Ready To start?
      </Typography>
      <Button
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
        Create Room
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
        placeholder="Enter Code"
        sx={{
          "& fieldset": { border: "none" },
          borderRadius: "2rem",
          margin: "0 auto",
          marginBottom: "2rem",
          height: "3.9rem",
          width: "11.1rem",
          background: "rgba(255, 253, 208)",
          border: "none",
        }}
        inputProps={{
          style: {
            textTransform: "uppercase",
            color: "darkblue",
            fontSize: "1rem",
            textAlign: "center",
            marginTop: "0.3rem",
          },
        }}
      />
      <Button
        
        variant="contained"
        sx={{
          borderRadius: "2rem",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          textTransform: "none",
          height: "4rem",
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

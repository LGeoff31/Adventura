import React from "react";
import { Stack, Typography, Button, TextField, Grid } from "@mui/material";
import Process from "../subcomponent/Process.js";

const HowItWorks = () => {
  return (
    <>
      <Grid>
        <Typography
          display="flex"
          variant="h5"
          fontWeight= "bold"
          justifyContent="center"
          color="white"
          sx={{
            background: "#052A42",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          How Adventura Works?
        </Typography>
        <img
          className="homepage--images--topic"
          src={"food-combo.png"}
          alt="activities"
          width={300}
          style={{ marginTop: "2rem", display: "flex", margin: "0 auto" }}
        />
        <Process
          step={1}
          description1={"Select Topic"}
          description2={"Restaurants / Activities / Hotels"}
          image2={"step1.png"}
        />
        <Process
          step={2}
          description1={"Set Preferences"}
          description2={
            "Select your preferences to filter and find the most suitable options for you and your group"
          }
          image2={"step2.png"}
        />
        <Process
          step={3}
          description1={"Share and Vote"}
          description2={
            "Invite your friends to join adn vote for the best choice"
          }
          image2={"step3.png"}
        />
        <Process
          step={4}
          description1={"View Poll Results"}
          description2={
            "Once the votes are collected see the final matches and enjoy!"
          }
          image2={"none"}
        />
      </Grid>
    </>
  );
};

export default HowItWorks;

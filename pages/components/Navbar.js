import React from "react";
import { Typography, Grid } from "@mui/material";

const Navbar = () => {
  return (
    <>
      
      <Grid sx={{ background: "#00316e" }}>
    
        <img
          src="/adventura.png"
          alt="logo"
          height={100}
          style={{ marginLeft: "1rem", 
          }}
        />
        
      </Grid>
      
    </>
  );
};

export default Navbar;

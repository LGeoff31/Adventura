import Image from "next/image";
import { Typography, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import HowItWorks from "./components/HowItWorks";
import AdditionalInfo from "./components/AdditionalInfo";
export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <HowItWorks />
      <AdditionalInfo />
    </>
  );
}

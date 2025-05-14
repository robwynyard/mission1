import React from "react";
import ImageUploadSection from "./ImageUploadSection";
import InsuranceContent from "./InsuranceContent";
import NavBar from "./NavBar";
import LogoBar from "./LogoBar";

export default function Home() {
  return (
    <div>
      <LogoBar></LogoBar>
      <NavBar></NavBar>
      <InsuranceContent></InsuranceContent>
    </div>
  );
}

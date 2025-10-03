import React from "react";
import { Map, PanelLeftDashed, Phone, Headset } from "lucide-react";
import IconBox from "../../ui/IconBox";
import Head from "next/head";
import IconButton from "../../ui/IconButton";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Hero = () => {
  return (
    <div>
      <div className=' flex lg:flex-row flex-col h-screen p-2 gap-2'>
        <Section1 />

        <Section2 />
      </div>
    </div>
  );
};

export default Hero;

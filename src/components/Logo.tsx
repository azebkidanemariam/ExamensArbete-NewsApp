import {  Image } from "react-native";
import React from "react";

type LogoProps = {
  width: number | string;
  height: number | string;
};

const Logo = (props: LogoProps) => {
  return (
    <Image
      style={{ width: props.width, height: props.height }}
      source={require("../../assets/favicon.png")}
    />
  );
};

export default Logo;
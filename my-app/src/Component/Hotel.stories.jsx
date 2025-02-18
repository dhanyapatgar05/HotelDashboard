import React from "react";
import Hotel from "./Hotel";
import "./Hotel.css";

export default {
  title: "Hotel",
  component: Hotel,
};

const Template = (args) => <Hotel {...args} />;

export const Default = Template.bind({});
Default.args = {};

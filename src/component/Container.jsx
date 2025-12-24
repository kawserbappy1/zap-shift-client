import React, { Children } from "react";

const Container = ({ Children }) => {
  return <div className=" container mx-auto">{Children}</div>;
};

export default Container;

import React, { useLayoutEffect } from "react";

const WrapperTitle = (props) => {
  useLayoutEffect(() => {
    document.title = props.title
      ? `Rosemary Restaurant | ${props.title}`
      : "Rosemary";
  }, []);
  return <>{props.children}</>;
};

export default WrapperTitle;

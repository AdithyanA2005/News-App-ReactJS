import React, { useState } from "react";
import LoaderContext from "./LoaderContext";

export default function LoaderState(props) {
  const [progress, setProgress] = useState(0);

  return (
    <LoaderContext.Provider value={{ progress, setProgress }}>
      {props.children}
    </LoaderContext.Provider>
  );
}

import { ReactNode } from "react";
import Headers from "./Headers";
import * as React from "react";

function BaseLayer({ children }: { children?: React.ReactElement }) {
  return (
    <div>
      <Headers />
      {children}
    </div>
  );
}

export default BaseLayer;

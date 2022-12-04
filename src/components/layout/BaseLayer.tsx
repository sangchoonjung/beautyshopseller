import { ReactNode } from "react";
import Headers from "./Headers";

function BaseLayer({ children }: { children: ReactNode }) {
  return (
    <div>
      <Headers />
      {children}
    </div>
  );
}

export default BaseLayer;

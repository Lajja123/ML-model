import React from "react";
import {
  Jupyter,
  IpyWidgetsComponent,
  Notebook,
  CellSidebarDefault,
  Cell,
} from "@datalayer/jupyter-react";
import CellComponents from "../examples/cell/CellComponents.tsx";

function Code() {
  return (
    <div style={{margin: 20}}>
      <Jupyter startDefaultKernel={true}>
        <CellComponents />
      </Jupyter>
    </div>
  );
}

export default Code;

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
    <>
      <Jupyter startDefaultKernel={true}>
        <CellComponents />
        <Cell />
        <hr />
      </Jupyter>
    </>
  );
}

export default Code;

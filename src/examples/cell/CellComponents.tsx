import { selectCell, Cell, CellSidebarDefault, Notebook  } from "@datalayer/jupyter-react";
import CellToolbar from './CellToolbar';

const CellPreview = () => {
  const cell = selectCell();
  return (
    <>
      {/* <div>source: {cell.source}</div>
      <br/> */}
      <div>kernel available: {String(cell.kernelAvailable)}</div>
      <br/>
    </>
  )
}

const CellComponents = () => (
  <>
    {/* <CellPreview /> */}
    <CellToolbar />
    <Cell />
    {/* <Notebook CellSidebar={CellSidebarDefault} path="../notebooks/ping.ipynb"></Notebook> */}
  </>
)

export default CellComponents;

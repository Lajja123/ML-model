import { render } from 'react-dom';
import { Jupyter } from "@datalayer/jupyter-react";
import CellComponents from './CellComponents';
import Layers from '../theme/Layers';

var div = document.createElement('div');
document.body.appendChild(div);

ReactDOM.render(
  Layers(),
  div
);

ReactDOM.render(
  CellComponents.default(),
  div
);


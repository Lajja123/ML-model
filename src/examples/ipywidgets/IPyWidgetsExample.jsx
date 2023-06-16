var ReactDOM = require('react-dom');
var { Jupyter, IpyWidgetsComponent } = require('@datalayer/jupyter-react');
var IPyWidgetsSimple = require('./IPyWidgetsSimple');
var IpyWidgetsToolbar = require('./IpyWidgetsToolbar');
var Layers = require('../theme/Layers');

var div = document.createElement('div');
document.body.appendChild(div);

ReactDOM.render(
  <Jupyter collaborative={false} terminals={false}>
    <Layers />
    <IpyWidgetsToolbar/>
    <IpyWidgetsComponent Widget={IPyWidgetsSimple}/>
  </Jupyter>,
  div
);

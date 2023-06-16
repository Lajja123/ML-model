import React, { useMemo } from 'react';
import { IOutput } from '@jupyterlab/nbformat';
import { useJupyter, Kernel, Output } from '@datalayer/jupyter-react';

import "./../index.css";

const SOURCE_IPYWIDGET = `import ipywidgets as widgets
widgets.IntSlider(
    value=7,
    min=0,
    max=10,
    step=1
)`;

const OUTPUT_2 = [
  {
    "data": {
      "application/json": {
        "array": [1, 2, 3],
        "bool": true,
        "object": {
          "foo": "bar"
        },
        "string": "string"
      },
      "text/plain": [
        "<IPython.core.display.JSON object>"
      ]
    },
    "execution_count": 8,
    "metadata": {
      "application/json": {
        "expanded": false,
        "root": "root"
      }
    },
    "output_type": "execute_result"
  }
];

export const OutputsComponents = () => {
  const { kernelManager } = useJupyter();
  const kernel = useMemo(() => {
    if (kernelManager) return new Kernel({ kernelManager, kernelName: 'python3' });
  }, [kernelManager]);

  return (
    <>
      <h3>Simple Output</h3>
      <Output
        autoRun={true}
        kernel={kernel}
        code={"print('Hello Datalayer 👍')"}
      />

      <h3>IPyWidget Output</h3>
      <Output
        autoRun={true}
        kernel={kernel}
        code={SOURCE_IPYWIDGET}
      />

      <h3>JSON Output</h3>
      <Output
        outputs={OUTPUT_2}
        autoRun={false}
        kernel={kernel}
      />
    </>
  );
};

export default OutputsComponents;

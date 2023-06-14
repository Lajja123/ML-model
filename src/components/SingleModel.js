import React from "react";
import img1 from "../components/assets/dataset1.jpg";
import { singlemodel } from "../dummyData/SingleModel";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import CreateModel from "./CreateModel";
import Model from "./Model";

function SingleModel() {
  const [openModal, setOpenModal] = useState(false);
  const [model, setModel] = useState(false);

  const toggleComponent = () => {
    setModel(!model);
  };

  const codeText = `#!/usr/bin/env python

import sys
from subprocess import call

BYTES_PER_KB = 1000
UNITS = ['B', 'KB', 'MB', 'GB']

if len(sys.argv) < 4:
    print 'Usage: %s [size] [unit] [path]' % sys.argv[0]
    exit(1)

size = float(sys.argv[1])
unit = sys.argv[2].upper()
filepath = sys.argv[3]

try:
    multiplier = UNITS.index(unit)
except ValueError:
    print """'%s' is an invalid unit. Accepted units: %s""" % (unit, str(UNITS))
    exit(1)

num_bytes = size * pow(BYTES_PER_KB, multiplier)

call(['dd', 'if=/dev/zero', 'of=%s' % filepath, 'bs=%d' % num_bytes, 'count=1'])`;

  return (
    <>
      {model ? (
        <Model />
      ) : (
        <>
          {" "}
          {singlemodel.map((item, index) => (
            <div className="signledataset-main-div">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  padding: "20px 50px",
                  borderBottom: "1px solid black",
                }}
              >
                <div style={{ width: "50%" }}>
                  {" "}
                  <h1 className="single-data-title" key={index}>
                    {item.name}
                  </h1>
                  <p>
                    {" "}
                    The provided dataset contains information related to CBSE
                    Class-X results
                  </p>
                  <div
                    style={{
                      backgroundColor: "lightgray",
                      width: "50px",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    {item.access}
                  </div>
                </div>
                <div className="single-dataset-flex-sidebar">
                  <div>
                    <button onClick={() => toggleComponent()}>Back</button>
                    <button
                      className="single-data-btn"
                      onClick={() => setOpenModal(true)}
                    >
                      Create Model
                    </button>
                    <CreateModel
                      open={openModal}
                      onClose={() => setOpenModal(false)}
                    />
                    <button className="single-data-btn">Download</button>
                  </div>
                  <div>
                    <img src={img1} className="single-dataset-img"></img>
                  </div>
                </div>{" "}
              </div>
              <div className="single-dataset-flex-content">
                <div style={{ width: "55%" }} className="single-dataset-desc">
                  {item.description}
                </div>
                <div className="single-dataset"></div>
              </div>
              <div>
                <SyntaxHighlighter language="python" style={solarizedlight}>
                  {codeText}
                </SyntaxHighlighter>
              </div>
            </div>
          ))}
        </>
      )}{" "}
    </>
  );
}

export default SingleModel;
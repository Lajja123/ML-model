import React from "react";
import "../styles/dataset.scss";
import { data } from "../dummyData/compute";
import CreateDataset from "./CreateDataset";
import { useState } from "react";
import SingleDataset from "./SingleDataset";
import SingleComputeModel from "./SingleComputeModel";

function Compute() {
  const [openModal, setOpenModal] = useState(false);
  const [singleCompute, setSingleCompute] = useState(false);

  const toggleComponent = () => {
    setSingleCompute(!singleCompute);
  };

  return (
    <>
      {singleCompute ? (
        <SingleComputeModel />
      ) : (
        <div className="dataset-main-div">
          <div style={{ borderBottom: "1px solid", padding: "10px 0px " }}>
            {" "}
            <h1 style={{ margin: "0" }} className="dataset-content">
              Compute Your Model
            </h1>
            <div className="dataset-content">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </div>
          </div>

          <div className="main-dataset-grid">
            {data.map((item, index) => (
              <>
                <div style={{ width: "100%" }}>
                  <img
                    src={item.image_url}
                    alt={`Image ${index}`}
                    className="dataset-img"
                  />
                  <div>
                    <h4 key={index}>{item.name}</h4>
                    <div key={index}>
                      <p className="dataset-dec">{item.description}</p>
                    </div>
                  </div>
                  <button
                    className="dataset-viewmore"
                    onClick={() => toggleComponent()}
                  >
                    Use Now
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Compute;

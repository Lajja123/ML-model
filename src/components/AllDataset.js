import React from "react";
import { data } from "../dummyData/dataset";
import { useState } from "react";

function AllDataset() {
  const [singleDataset, setSingleDataset] = useState(false);

  const toggleComponent = () => {
    setSingleDataset(!singleDataset);
  };

  return (
    <div className="main-dataset-grid-profile">
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
                {item.file_type} ( {item.file_size})
              </div>
              <div key={index}>
                <p className="dataset-dec">{item.description}</p>
              </div>
            </div>
            <button
              className="dataset-viewmore"
              onClick={() => toggleComponent()}
            >
              View More
            </button>
          </div>
        </>
      ))}
    </div>
  );
}

export default AllDataset;

import React from "react";
import { data } from "../dummyData/model";

function AllModel() {
  return (
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
                {item.file_type} ( {item.file_size})
              </div>
              <div key={index} className="dataset-dec">
                {item.description}
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

export default AllModel;

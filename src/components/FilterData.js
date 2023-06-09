import React from "react";
import { useState } from "react";
import "../styles/filterdata.scss";

function FilterData({ open, onClose }) {
  const [openModal, setOpenModal] = useState(false);
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <p
            className="closeBtn"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          >
            X
          </p>
          <div className="filter-main-div">
            <h4>File Type</h4>
            <input
              type="number"
              id="file-type"
              name="type"
              placeholder="MIN"
              style={{ padding: "10px" }}
            />
            <select
              name="category"
              id="category"
              className=""
              style={{ padding: "10px", margin: "0px 10px" }}
            >
              <option value="Eduaction">MB</option>
              <option value="All dataset">KB</option>
              <option value="Drugs & Medical">GB</option>
            </select>

            <input
              type="number"
              id="file-type"
              name="type"
              placeholder="MIN"
              style={{ padding: "10px" }}
            />
            <select
              name="category"
              id="category"
              className=""
              style={{ padding: "10px", margin: "0px 10px" }}
            >
              <option value="Eduaction">MB</option>
              <option value="All dataset">KB</option>
              <option value="Drugs & Medical">GB</option>
            </select>
            <h4>File Size</h4>
            <div>
              <button>CSV</button>
              <button>JSON</button>
            </div>
          </div>
          <div>
            <button>Clear</button>
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterData;

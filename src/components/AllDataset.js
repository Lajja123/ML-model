import React from "react";
import { data } from "../dummyData/dataset";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { modelInstance } from "./Contract";
import lighthouse from "@lighthouse-web3/sdk";

function AllDataset(props) {
  const [allDataset, setAllDataset] = useState([]);

  const getAllDatasets = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await modelInstance();
        const getDataset = await con.getAllDataSet();
        setAllDataset(getDataset);
        console.log(allDataset);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchDatasets() {
      await getAllDatasets();
    }
    fetchDatasets();
  }, []);

  return (
    <div className="main-dataset-grid-profile">
      {allDataset.map((item, index) => (
        <>
          <div style={{ width: "100%" }}>
            {/* <img
              src={item.image_url}
              alt={`Image ${index}`}
              className="dataset-image"
            /> */}
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
              onClick={() => {
                props.profileLinks("singleDataset");
              }}
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

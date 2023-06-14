import React from "react";
import { data } from "../dummyData/dataset";
import { useState, useEffect } from "react";
import { modelInstance } from "./Contract";

function AllDataset(props) {

  const [allDataSet , setAllDataSet] = useState([]);

  const getData = async () => {
    try {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            if (!provider) {
                console.log("Metamask is not installed, please install!");
            }
            const con = await modelInstance();
            const dataSet = await con.getAllDataSet();

            
            setAllDataSet(dataSet);
            console.log(dataSet);
        }
    } catch (error) {
        console.log(error);
    }
};
useEffect(() => {
  async function fetchModels() {
      await getData();
  }
  console.log("hello");
  fetchModels()
}, [])

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

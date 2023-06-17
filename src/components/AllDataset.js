import React from "react";
import { data } from "../dummyData/dataset";
import { useState, useEffect } from "react";
import { modelInstance } from "./Contract";
import { ethers } from "ethers";
import "../styles/profile.scss";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

function AllDataset(props) {

  const navigate = useNavigate()
  const {address} = useAccount();
  const [allDataSet, setAllDataSet] = useState([]);
  // console.log("Address",address)
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
        console.log("get data function");
        const dataSet = await con.getAllDataSetOfUser(address);

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
    fetchModels();
  }, []);

  return (
    <div className="main-dataset-grid-profile">
      {allDataSet.map((item, index) => (
        <div key={index}>
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <img
              src={`https://gateway.lighthouse.storage/ipfs/${item.image}`}
              alt={`Image ${index}`}
              className="dataset-image"
            />
            <div className="alldataset-grid">
              <h4 key={index}>{item.name}</h4>
              <div key={index}>
                <p className="dataset-dec">{item.title}</p>
              </div>
              <div key={index}>
                <p className="dataset-dec">{item.description}</p>
              </div>
              <button
                className="dataset-viewmore"
                onClick={() => {
                  props.setSingle(allDataSet[index]);
                  props.profileLinks("SingleDataset");
                }}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllDataset;

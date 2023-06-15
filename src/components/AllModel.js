import React from "react";
import { data } from "../dummyData/model";
import { useState, useEffect } from "react";
import { modelInstance } from "./Contract";
import lighthouse from "@lighthouse-web3/sdk";
import { ethers } from "ethers";

function AllModel(props) {
  const [allModelData, setAllModelData] = useState([]);

  const getModels = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await modelInstance();
        const modelData = await con.getAllModelData();

        setAllModelData(modelData);
        console.log(modelData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchModels() {
      await getModels();
    }
    console.log("hello");
    fetchModels();
  }, []);

  return (
    <div className="main-dataset-grid-profile">
      {data.map((item, index) => (
        <>
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
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
              onClick={() => {
                props.profileLinks("singleModel");
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

export default AllModel;

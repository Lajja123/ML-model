import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/register.scss";
import file from "../components/assets/file.png";
import "../styles/createdataset.scss";
import { ethers } from "ethers";
import { modelInstance } from "./Contract";
import lighthouse from "@lighthouse-web3/sdk";

function CreateDataset({ open, onClose }) {
  // const [status, setStatus] = useState(false);
  const [Data, setData] = useState({
    title: null,
    description: null,
    category: null,
    file: null,
    status: null,
  });

  /* const handleChange = (event) => {
    const { name, value } = event.target;
    const file = event.target.files[0];
    setData((prevData) => ({
      ...prevData,
      [name]: value,
      file: file,
    }));
  }; */

  useEffect(() => {
    console.log(Data);
  }, [Data]);

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const uploadDataset = async () => {
    try {
      console.log("in upload image function");
      const file = Data.file; // Access the file from the array
      const output = await lighthouse.upload(
        file,
        "693bc913.49da890a1fd6411bbb1bfa9e5492966a",
        progressCallback
      );
      console.log("File Status:", output);

      return output;
    } catch (error) {
      console.log(error);
    }
  };

  const createDataset = async (e) => {
    try {
      console.log("in create account function");
      const output = await uploadDataset();
      const cids = output.data.Hash;
      console.log("cids: ", cids);

      console.log("Data: ", Data);

      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await modelInstance();
        console.log("Hello");
        const tx = await con.setData(
          Data.title,
          Data.description,
          cids,
          Data.category,
          Data.status
        );

        console.log(tx);
        await tx.wait();
        console.log(con);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <div className="register-main-div" style={{ width: "90%" }}>
            <div className="register-sub-div" style={{ margin: "0" }}>
              <div
                className="form-file"
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  height: "15vh",
                  justifyContent: "space-evenly",
                }}
              >
                <div style={{ width: "50px", margin: "0 auto" }}>
                  <img src={file} alt="" style={{ width: "50px" }} />
                </div>
                <div className="file-input-container">
                  <input
                    type="file"
                    name="file"
                    accept=".csv"
                    onChange={(e) => {
                      setData({ ...Data, file: e.target.value });
                    }}
                    // multiple
                  />
                </div>
              </div>
              <label className="form-flexlable" style={{ width: "400px" }}>
                <input
                  type="text"
                  name="name"
                  value={Data.title}
                  onChange={(e) => {
                    setData({ ...Data, title: e.target.value });
                  }}
                  className="form-inputLable"
                  placeholder="Enter Dataset Title"
                />
              </label>
              <label className="form-flexlable" style={{ width: "400px" }}>
                <input
                  type="text"
                  name="occupation"
                  value={Data.description}
                  onChange={(e) => {
                    setData({ ...Data, description: e.target.value });
                  }}
                  className="form-inputLable"
                  placeholder="Description"
                />
              </label>
              <div className="form-flexlable" style={{ width: "400px" }}>
                {" "}
                <select
                  name="category"
                  id="category"
                  value={Data.category}
                  onChange={(e) => {
                    setData({ ...Data, category: e.target.value });
                  }}
                  className=""
                  style={{ padding: "10px" }}
                >
                  <option value="0">All dataset</option>
                  <option value="1">Education</option>
                  <option value="2">Drugs & Medical</option>
                  <option value="3">Earth & nature</option>
                  <option value="4">Science & Technology</option>
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "50%",
                  height: "50px",
                  margin: "0 auto ",
                  justifyContent: "space-around",
                }}
              >
                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="radio"
                    name="flexRadioDefault"
                    id="radioDefault01"
                    value="true"
                    onChange={(e) => {
                      setData({ ...Data, status: e.target.value });
                    }}
                  />
                  <label
                    class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="radioDefault01"
                  >
                    public
                  </label>
                </div>
                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="radio"
                    name="flexRadioDefault"
                    id="radioDefault02"
                    value="false"
                    onChange={(e) => {
                      setData({ ...Data, status: e.target.value });
                    }}
                    checked
                  />
                  <label
                    class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="radioDefault02"
                  >
                    private
                  </label>
                </div>
              </div>
              <div
                className="form-button"
                style={{ display: "flex", width: "70%" }}
              >
                <button
                  className="form-btn"
                  style={{ width: "100%", margin: "0px 20px" }}
                  onClick={createDataset}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateDataset;
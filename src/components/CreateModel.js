import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/register.scss";
import file from "../components/assets/file.png";
import "../styles/createdataset.scss";

function CreateModel({ open, onClose }) {
  const [Data, setData] = useState({
    Name: "",
    description: "",
    catagory: "",
    file: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const file = event.target.files[0];
    setData((prevData) => ({
      ...prevData,
      [name]: value,
      file: file,
    }));
  };
  useEffect(() => {
    console.log(Data);
  }, [Data]);

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
                    onChange={handleChange}
                    multiple
                  />
                </div>
              </div>
              <label className="form-flexlable" style={{ width: "400px" }}>
                <input
                  type="text"
                  name="name"
                  value={Data.title}
                  onChange={handleChange}
                  className="form-inputLable"
                  placeholder="Model name"
                />
              </label>
              <label className="form-flexlable" style={{ width: "400px" }}>
                <input
                  type="text"
                  name="occupation"
                  value={Data.description}
                  onChange={handleChange}
                  className="form-inputLable"
                  placeholder="Description"
                />
              </label>
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
                    checked
                  />
                  <label
                    class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="radioDefault02"
                  >
                    pivate
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

export default CreateModel;

import React from "react";
import "../styles/dataset.scss";
import { useState, useEffect } from "react";
import SingleComputeModel1 from "./Container1";
import img1 from "../components/assets/cont1.jpg";
import img2 from "../components/assets/cont2.jpeg";
import SingleComputeModel2 from "./Container2";
import { Wallet, providers } from "ethers";
import { Database, Registry } from "@tableland/sdk";

function Compute1() {
  const [compute, setCompute] = useState({
    training: false,
    computeFinal: false,
  });
  const [singleCompute1, setSingleCompute1] = useState(false);
  const [singleCompute2, setSingleCompute2] = useState(false);
  
  const fetchData = async() => {
    console.log('Hello dbdbbdebdbdbdbdbdbbd')
    const privateKey = process.env.REACT_APP_PRIVATEKEY;
    const wallet = new Wallet(privateKey);
    // To avoid connecting to the browser wallet (locally, port 8545).
    // For example: "https://polygon-mumbai.g.alchemy.com/v2/YOUR_ALCHEMY_KEY"
    const provider = new providers.Web3Provider(window.ethereum);
    const signer = wallet.connect(provider);
    // Connect to the database
    const db = new Database({ signer });
    const { results } = await db.prepare(`SELECT * FROM ${process.env.REACT_APP_TABLELAND_TABLE};`).all();
    console.log(results);
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (compute.training) {
    return <SingleComputeModel1 />;
  }
  if (compute.computeFinal) {
    return <SingleComputeModel2 />;
  }
  return (
    <>
      <div className="dataset-main-div">
        <div style={{ borderBottom: "1px solid", padding: "10px 0px " }}>
          {" "}
          <h1 style={{ margin: "10px 0px" }} className="dataset-content">
            Decentralized Computation of ML Model
          </h1>
          <div
            className="dataset-content"
            style={{
              width: "70%",
              textAlign: "justify",
              lineHeight: "25px",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            <div style={{marginTop:'20px'}}> <span style={{fontWeight:'650', paddingBottom:'10px'}}> Experience Decentralized Computing:</span><br/> Welcome to our platform, where you can harness the power of decentralized computing for your ML model computations.</div>
            <div style={{marginTop:'20px'}}><span style={{fontWeight:'650'}}>No Worries about Low Laptop Configuration: </span><br/>Don't let low laptop configurations hinder your progress. With our platform, you can run and train your ML models without the need for high-end hardware.</div>
         
          <div style={{marginTop:'20px'}}> <span style={{fontWeight:'650'}}>Handling Huge Datasets and Models:</span> <br/>Bid farewell to concerns about running huge datasets and complex ML models. Our platform can handle the computational demands, allowing you to focus on your work.</div>
          <div style={{marginTop:'20px'}}><span style={{fontWeight:'650'}}>Easy Execution Process:</span><br/> It's as simple as providing the dataset URLs and model URL, and clicking the execute button. Once initiated, you can close the tab and attend to other tasks while your execution progresses.</div>
          <div style={{marginTop:'20px'}}><span style={{fontWeight:'650'}}>Check Execution Status: </span><br/> After some time, you can return to the platform and conveniently check the status of your execution. No need to constantly monitor the process or stay tied to your computer.</div>
          <div style={{marginTop:'20px'}}><span style={{fontWeight:'650'}}>Embrace Decentralized Computation:</span><br/> Our platform empowers you to embrace the benefits of decentralized computation, enabling efficient and flexible ML model computations.</div>
          <div style={{marginTop:'20px'}}><span style={{fontWeight:'650'}}>Let's Get Started: </span><br/>Take the first step towards unlocking the potential of decentralized computing. </div>
          </div>
        </div>
        <div style={{marginTop:'30px', fontSize:'25px', justifyContent:'center'}}> Introducing our two powerful containers tailored to your specific needs:<br/> <br/>1. <b>Efficient Computing</b> <br/>2. <b>Advanced Visualization and Computation</b></div>
        <div></div>
        <div className="main-dataset-grid">
          
          <div style={{ width: "100%" }}>
          <h1>Efficient Computing</h1>
            <img src={img2} alt="" className="dataset-img" />
            <div>
              
              <div style={{marginBottom:'15px'}}>
                <div className="dataset-cont">
                <div style={{marginBottom:'15px'}}><span style={{fontSize:'24px', fontWeight:'650'}}>Libraries:</span> <br/><span style={{fontSize:'20px'}}> Numpy, Pandas, Scikit-learn, Matplotlib, Seaborn</span></div>
                <div ><span style={{fontSize:'24px', fontWeight:'650'}}>Purpose:</span> <br/><span style={{fontSize:'20px'}}>Designed for general-purpose computing tasks, this container is equipped with essential libraries for data manipulation, machine learning, and visualization.</span></div>
                </div>
              </div>
              <button
                className="dataset-viewmore"
                onClick={() => {
                  setCompute({ training: true, computeFinal: false });
                }}
              >
                Use Now
              </button>
            </div>
          </div>

          <div style={{ width: "100%" }}>
          <h1>Advanced Visualization and Computation</h1>
            <img src={img1} alt="" className="dataset-img" />
            <div>
              
              <div>
              <div style={{marginBottom:'15px'}}>
                <div className="dataset-cont">
                <div style={{marginBottom:'15px'}}><span style={{fontSize:'24px', fontWeight:'650'}}>Libraries:</span> <br/><span style={{fontSize:'20px'}}> Numpy, Scipy, Scikit-learn, Theano, TensorFlow, Keras, PyTorch, Pandas, Matplotlib, Seaborn, Plotly</span></div>
                <div ><span style={{fontSize:'24px', fontWeight:'650'}}>Purpose:</span> <br/><span style={{fontSize:'20px'}}>Tailored for demanding computation and advanced visualization, this container houses a comprehensive suite of libraries, enabling you to tackle complex ML models and generate visually compelling outputs</span></div>
                </div>
              </div>
              </div>
              <button
                className="dataset-viewmore"
                onClick={() => {
                  setCompute({ training: false, computeFinal: true });
                }}
              >
                Use Now
              </button>
            </div>
          </div>
        </div>{" "}
        {/* <div style={{overflowY:'scroll', width:'1000px'}}> */}
        <table >
  <thead>
    <tr>
      <th>ID</th>
      <th>Wallet Address</th>
      <th>Job ID</th>
      <th>CID</th>
      <th>Get CID</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>1</td>
      <td>0x86F0F037eB0a76b0d40E<br/>59590F2be7eD5eBA687b</td>
      {/* <td>0x86F0F037eB0...</td> */}
      <td>8a62b7f1-cd2a-46b3-87e8-4fcc75066dfd</td>
      {/* <td>8a62b7f1...</td> */}
      <td>QmQnRdAMXcuN1vGfpKQgxKu1<br/>N1ufayEdDvy84DbxatyHyL</td>
      {/* <td>QmQnRdAMX...</td> */}
      <td><button>Get CID</button></td>
    </tr>
    <tr>
      <td>2</td>
      {/* <td>0x86F0F037eB0...</td> */}
      <td>0x86F0F037eB0a76b0d40E<br/>59590F2be7eD5eBA687b</td>
      <td>a562deed-0625-4840-9624-0d461d1e638c</td>
      {/* <td>a562deed...</td> */}
      {/* <td>QmcqEotTSU...</td> */}
      <td>QmcqEotTSUca1gKhGsZN3C3<br/>pwdc2fMaWPNejRr2GAt 9b16</td>
      <td><button>Get CID</button></td>
    </tr>   
  </tbody>
</table>
{/* </div> */}
      </div>
    </>
  );
}

export default Compute1;

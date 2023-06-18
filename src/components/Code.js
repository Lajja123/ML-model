import React,{useState} from "react";
import MonacoEditor from "./MonacoEditor";

function Code() {
  const [code, setCode] = useState('');
  const handleRunCode = () => {
    try {
      // Use eval or any other method to execute the code
      eval(code);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <MonacoEditor code={code} onRunCode={handleRunCode} />
      <button onClick={handleRunCode}>Run Code</button>
    </div>
  );
};


export default Code;

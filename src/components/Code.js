import React, { useState } from "react";
import MonacoEditor from "./MonacoEditor";

function Code() {
  const [code, setCode] = useState("");
  const handleRunCode = () => {
    try {
      const runnableCode = new Function(code);
      runnableCode();
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
}

export default Code;

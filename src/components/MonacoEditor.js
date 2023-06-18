import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

const MonacoEditor = ({ code, onRunCode }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = monaco.editor.create(editorRef.current, {
      value: code,
      language: 'javascript',
      theme: 'vs-dark',
    });

    return () => {
      editor.dispose();
    };
  }, [code]);

  return (
    <div ref={editorRef} style={{ width: '100%', height: '400px' }} />
  );
};

export default MonacoEditor;

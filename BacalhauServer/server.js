// const express = require("express");
import * as express from "express";
import { spawnSync } from "child_process";
import cors from "cors";
import path from "path";
import archiver from "archiver";
import fs from "fs";

const app = express();
const PORT = 5500;
// let jobIdToDownload = null;

app.use(cors());
app.use(express.json());
app.use(express.static("outputs"));

app.post("/execute/container1", (req, res) => {
  const { notebookUrl, inputs } = req.body;
  const notebookFileName = getFileNameFromUrl(notebookUrl);
  const outputFileName = generateOutputFileName(notebookUrl);

  const inputArgs = inputs
    .map((input) => `-i src=${input.url},dst=/inputs`)
    .join(" ");
  const jobCommand = `bacalhau docker run --wait=false --id-only --timeout 3600 --wait-timeout-secs 3600 -w /inputs -i ${notebookUrl} ${inputArgs} yash0730/jupyter-notebook -- jupyter nbconvert --execute --to notebook --output /outputs/${outputFileName} ${notebookFileName}`;
  const jobExecution = spawnSync("bash", ["-c", jobCommand]);
  const jobId = jobExecution.stdout.toString().trim();
  // console.log(jobId)
  res.json({ jobId });

  // if (jobExecution.status === 0) {
  //   // const jobId = jobExecution.stdout.toString().trim();
  //   const jobInfoCommand = `bacalhau describe ${jobId}`;
  //   const jobInfoExecution = spawnSync('bash', ['-c', jobInfoCommand]);

  //   if (jobInfoExecution.status === 0) {
  //     const jobInfo = jobInfoExecution.stdout.toString().trim();
  //     const cidRegex = /CID:\s*(\S+)/;
  //     const match = jobInfo.match(cidRegex);

  //     if (match && match.length > 1) {
  //       const cid = match[1];
  //       jobIdToDownload = jobId; // Store the jobId for download
  //       res.json({ jobId, cid, jobInfo });
  //     } else {
  //       res.status(500).json({ error: 'CID not found in jobInfo' });
  //     }
  //   } else {
  //     res.status(500).json({ error: 'Failed to get job information' });
  //   }
  // } else {
  //   res.status(500).json({ error: 'Failed to execute the notebook' });
  // }
});

app.post("/execute/container1/:jobId", (req, res) => {
  const jobId = req.params;
  const output = jobId.jobId.replace(/:/g, "");
  console.log(output);
  const jobInfoCommand = `bacalhau describe ${output}`;
  const jobInfoExecution = spawnSync("bash", ["-c", jobInfoCommand]);

  if (jobInfoExecution.status === 0) {
    const jobInfo = jobInfoExecution.stdout.toString().trim();
    const cidRegex = /CID:\s*(\S+)/;
    const match = jobInfo.match(cidRegex);

    if (match && match.length > 1) {
      const cid = match[1];
      jobIdToDownload = jobId; // Store the jobId for download
      res.json({ jobId, cid, jobInfo });
    } else {
      res.status(500).json({ error: "CID not found in jobInfo" });
    }
  } else {
    res.status(500).json({ error: "Failed to get job information" });
  }
});

app.post("/execute/container2", (req, res) => {
  const { notebookUrl, inputs } = req.body;
  const notebookFileName = getFileNameFromUrl(notebookUrl);
  const outputFileName = generateOutputFileName(notebookUrl);

  const inputArgs = inputs
    .map((input) => `-i src=${input.url},dst=/inputs`)
    .join(" ");
  const jobCommand = `bacalhau docker run --wait=false --id-only --timeout 3600 --wait-timeout-secs 3600 -w /inputs -i ${notebookUrl} ${inputArgs} yash0730/container2 -- jupyter nbconvert --execute --to notebook --output /outputs/${outputFileName} ${notebookFileName}`;
  const jobExecution = spawnSync("bash", ["-c", jobCommand]);
  const jobId = jobExecution.stdout.toString().trim();
  // console.log(jobId)
  res.json({ jobId });

  // if (jobExecution.status === 0) {
  //   // const jobId = jobExecution.stdout.toString().trim();
  //   const jobInfoCommand = `bacalhau describe ${jobId}`;
  //   const jobInfoExecution = spawnSync('bash', ['-c', jobInfoCommand]);

  //   if (jobInfoExecution.status === 0) {
  //     const jobInfo = jobInfoExecution.stdout.toString().trim();
  //     const cidRegex = /CID:\s*(\S+)/;
  //     const match = jobInfo.match(cidRegex);

  //     if (match && match.length > 1) {
  //       const cid = match[1];
  //       jobIdToDownload = jobId; // Store the jobId for download
  //       res.json({ jobId, cid, jobInfo });
  //     } else {
  //       res.status(500).json({ error: 'CID not found in jobInfo' });
  //     }
  //   } else {
  //     res.status(500).json({ error: 'Failed to get job information' });
  //   }
  // } else {
  //   res.status(500).json({ error: 'Failed to execute the notebook' });
  // }
});

app.post("/execute/container2/:jobId", (req, res) => {
  const jobId = req.params;
  const output = jobId.jobId.replace(/:/g, "");
  console.log(output);
  const jobInfoCommand = `bacalhau describe ${output}`;
  const jobInfoExecution = spawnSync("bash", ["-c", jobInfoCommand]);

  if (jobInfoExecution.status === 0) {
    const jobInfo = jobInfoExecution.stdout.toString().trim();
    const cidRegex = /CID:\s*(\S+)/;
    const match = jobInfo.match(cidRegex);

    if (match && match.length > 1) {
      const cid = match[1];
      jobIdToDownload = jobId; // Store the jobId for download
      res.json({ jobId, cid, jobInfo });
    } else {
      res.status(500).json({ error: "CID not found in jobInfo" });
    }
  } else {
    res.status(500).json({ error: "Failed to get job information" });
  }
});

// Under Development it's not working yet!

// app.get('/download', (req, res) => {
//   if (!jobIdToDownload) {
//     res.status(404).send('No file available for download');
//     return;
//   }

//   const jobId = jobIdToDownload;
//   const downloadCommand = `bacalhau get ${jobId}`;

//   const downloadExecution = spawnSync('bash', ['-c', downloadCommand]);

//   if (downloadExecution.status === 0) {
//     const outputFolderPath = path.join(__dirname, 'my-app');
//     const zipFilePath = path.join(outputFolderPath, `output_${jobId}.zip`);

//     const archive = archiver('zip', {
//       zlib: { level: 9 } // Compression level (optional)
//     });

//     archive.directory(outputFolderPath, false); // Add the output folder to the ZIP archive

//     const output = fs.createWriteStream(zipFilePath);

//     output.on('close', () => {
//       // Send the ZIP file to the client for download
//       res.status(200).sendFile(zipFilePath, {
//         headers: {
//           'Content-Type': 'application/zip',
//           'Content-Disposition': `attachment; filename=output_${jobId}.zip`
//         }
//       });

//       // Clean up the temporary ZIP file
//       fs.unlinkSync(zipFilePath);
//     });

//     archive.pipe(output);
//     archive.finalize();
//   } else {
//     res.status(500).send('Error downloading file');
//   }

//   // Reset the jobIdToDownload after attempting to download
//   jobIdToDownload = null;
// });

function getFileNameFromUrl(url) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

function generateOutputFileName(notebookUrl) {
  const urlParts = notebookUrl.split("/");
  const notebookName = urlParts[urlParts.length - 1];
  const fileNameParts = notebookName.split(".");
  fileNameParts.pop();
  return `${fileNameParts.join(".")}_output.ipynb`;
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

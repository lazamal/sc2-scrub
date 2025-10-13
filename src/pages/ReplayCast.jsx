import { useState } from "react";
import Navbar from "../components/Navbar";
import ReplayTab from "../components/ReplayTab";
import { buttonStyle, replayTabStyle } from "../styles";

export default function ReplayCast() {
  const [fileData, setFileData] = useState(null);

  function handleFileUpload(event) {
    event.preventDefault();
    setFileData(event.target.value);
    console.log(fileData);
    console.log(`file ${fileData} uploaded`);
  }

  return (
    <div className="h-screen">
      <Navbar />
      <h1 className="mt-10 mb-10">ReplayCast</h1>
      <ReplayTab />

      <div className={`${replayTabStyle} + mt-4`}>
        <h2 className="text-4xl mb-10">Upload your replay now!</h2>
        <form
          id="submitReplay"
          onSubmit={handleFileUpload}
          className="flex flex-col"
        >
          <input type="file" className="mb-5" />

          <button type="submit" className={buttonStyle}>
            Cast my Game!
          </button>
        </form>
      </div>
    </div>
  );
}

import { useRef, useState } from "react";
import Template from "../Template/Template";

function View(props) {
  const profile = props.profile;
  const downloadJpeg = props.downloadJpeg;
  const downloadPdf = props.downloadPdf;
  const printProfile = props.printProfile;
  const handleCancel = props.handleCancel;
  const [exportFormat, setExportFormat] = useState("pdf");
  const profileRef = useRef(null);

  const getProfileNode = () =>
    profileRef.current || document.getElementById("profile-print-area");

  const handleDownload = () => {
    const targetNode = getProfileNode();
    if (!targetNode) return;

    if (exportFormat === "image") {
      downloadJpeg(targetNode);
      return;
    }
    downloadPdf(targetNode);
  };

  const handlePrint = () => {
    const targetNode = getProfileNode();
    if (!targetNode) return;
    printProfile(targetNode, exportFormat);
  };

  return (
    <div className="shell">
      <div className="top-bar">
        <h1>{profile.name}</h1>
        <div className="export-toolbar">
          <label className="export-select-wrap">
            <span>Format</span>
            <select
              value={exportFormat}
              onChange={(event) => setExportFormat(event.target.value)}
            >
              <option value="pdf">PDF</option>
              <option value="image">Image</option>
            </select>
          </label>
          <div className="row-btns">
            <button className="btn yellow" onClick={handleDownload}>
              Download
            </button>
            <button className="btn yellow" onClick={handlePrint}>
              Print
            </button>
            <button className="btn" onClick={handleCancel}>
              Back
            </button>
          </div>
        </div>
      </div>
      <div id="profile-print-area" ref={profileRef}>
        <Template profile={profile} />
      </div>
    </div>
  );
}

export default View;

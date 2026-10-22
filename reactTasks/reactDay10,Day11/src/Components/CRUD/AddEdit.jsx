import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import Template from "../Template/Template";
import LocationDropdown from "../General/LocationDropdown";
import {
  uploadImageWithFormData,
  resolveImageUrl,
} from "../../utils/commonFunctions";

function AddEdit(props) {
  const {
    mode,
    draft,
    error,
    handleSave,
    handleCancel,
    changeDraftField,
    changeSectionField,
    addSection,
    removeSection,
  } = props;

  const handleLocationChange = (loc) => {
    changeDraftField(loc);
  };

  const handlePhoneChange = (event) => {
    const numericOnly = event.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    changeDraftField("phone", numericOnly);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const data = await uploadImageWithFormData(file);
      changeDraftField("profileImage", data.imageUrl);
    } catch (err) {
      alert("Image upload failed");
    }
  };

  // const handleImageUrlBlur = (event) => {
  //   const val = event.target.value.trim();
  //   if (val) {
  //     changeDraftField("profileImage", resolveImageUrl(val));
  //   }
  // };

  if (!draft) return null;

  return (
    <div className="shell">
      <div className="top-bar">
        <h1>{mode === "add" ? "Add New Profile" : "Edit Profile"}</h1>
        <div className="row-btns">
          <button className="btn yellow" onClick={handleSave}>
            Save
          </button>
          <button className="btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>

      {error && (
        <div
          style={{
            background: "#fce4e4",
            color: "#c00",
            padding: "10px 16px",
            borderRadius: "6px",
            marginBottom: "14px",
            fontWeight: 600,
          }}
        >
          {error}
        </div>
      )}

      <div className="split">
        <div className="split-right">
          <h3>Profile Info</h3>

          <label>
            Name *
            <input
              value={draft.name}
              onChange={(e) => changeDraftField("name", e.target.value)}
              placeholder="Enter name"
            />
          </label>
          <label>
            Designation
            <input
              value={draft.designation}
              onChange={(e) => changeDraftField("designation", e.target.value)}
              placeholder="Enter designation"
            />
          </label>
          <label>
            Company
            <input
              value={draft.company}
              onChange={(e) => changeDraftField("company", e.target.value)}
              placeholder="Enter company"
            />
          </label>
          <label>
            Email
            <input
              value={draft.email}
              onChange={(e) => changeDraftField("email", e.target.value)}
              placeholder="Enter email"
            />
          </label>
          <label>
            Phone
            <input
              value={draft.phone}
              onChange={handlePhoneChange}
              placeholder="Enter 10-digit phone number"
              inputMode="numeric"
              maxLength={10}
            />
          </label>
          <label>
            LinkedIn
            <input
              value={draft.linkedin}
              onChange={(e) => changeDraftField("linkedin", e.target.value)}
              placeholder="Enter LinkedIn URL"
            />
          </label>
          <label>
            Twitter
            <input
              value={draft.twitter}
              onChange={(e) => changeDraftField("twitter", e.target.value)}
              placeholder="Enter Twitter handle"
            />
          </label>

          <LocationDropdown
            draft={draft}
            onChangeLocation={handleLocationChange}
          />

          <div style={{ marginBottom: "15px" }}>
            <label>
              Upload Profile Image (FormData)
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>


            {draft.profileImage && (
              <div style={{ marginTop: "10px" }}>
                <img
                  src={draft.profileImage}
                  alt="Profile preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #ddd",
                    display: "block",
                  }}
                />
              </div>
            )}
          </div>

          <hr />
          <h3>Colors</h3>
          <div className="color-row">
            <label>
              Primary Color
              <input
                type="color"
                value={draft.primaryColor}
                onChange={(e) =>
                  changeDraftField("primaryColor", e.target.value)
                }
              />
            </label>
            <label>
              Secondary Color
              <input
                type="color"
                value={draft.secondaryColor}
                onChange={(e) =>
                  changeDraftField("secondaryColor", e.target.value)
                }
              />
            </label>
            <label>
              Text Color
              <input
                type="color"
                value={draft.textColor}
                onChange={(e) => changeDraftField("textColor", e.target.value)}
              />
            </label>
            <label>
              Form Color
              <input
                type="color"
                value={draft.formColor}
                onChange={(e) => changeDraftField("formColor", e.target.value)}
              />
            </label>
            <label>
              Profile Circle Color
              <input
                type="color"
                value={draft.dpColor || "#111111"}
                onChange={(e) => changeDraftField("dpColor", e.target.value)}
              />
            </label>
          </div>

          <hr />
          <div className="section-head">
            <h3>Sections</h3>
            <button className="btn yellow" onClick={addSection}>
              + Add
            </button>
          </div>

          {draft.sections.length === 0 && (
            <p style={{ color: "#888", fontSize: "14px" }}>
              No sections yet. Click <b>+ Add</b> to create one.
            </p>
          )}

          {draft.sections.map((section) => (
            <div className="section-box" key={section.id}>
              <label>
                Title
                <input
                  value={section.title}
                  onChange={(e) =>
                    changeSectionField(section.id, "title", e.target.value)
                  }
                />
              </label>

              <label>Description</label>
              <ReactQuill
                value={section.description}
                onChange={(val) =>
                  changeSectionField(section.id, "description", val)
                }
              />

              <button
                className="btn red small"
                onClick={() => removeSection(section.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="split-left">
          <h3>Live Preview</h3>
          <Template profile={draft} onLocationChange={handleLocationChange} />
        </div>
      </div>
    </div>
  );
}

export default AddEdit;

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddEdit from "../CRUD/AddEdit";
import Delete from "../CRUD/Delete";
import View from "../CRUD/View";
import { countryApi } from "../../utils/commonFunctions";
import { REGEX, validateProfile } from "../../utils/validation";

function getDefaultSections() {
  return [
    {
      id: 1,
      title: "Education & Experience",
      description:
        "<p>Joshua Freedman's rich twenty-five-year experience in financial services is testament to his successful string of satisfied clients.</p><ol><li>Graduated from Stanford University in 1997.</li><li>Started his career in banking at JPMorgan Chase.</li><li>Acquired the Certified Financial Planner designation in 2004.</li><li>Acquired the Accredited Investment Fiduciary in 2009.</li></ol>",
    },
    {
      id: 2,
      title: "Working Approach",
      description:
        "<p>Placing values on integrity and diligence, Joshua spends time with his clients by helping them identify their financial weaknesses and achieve their goals through a comprehensive financial approach.</p>",
    },
    {
      id: 3,
      title: "Achievements",
      description:
        "<ul><li>Has organized and presented hundreds of financial education seminars across the country at major corporations and universities.</li><li>One of his passions is teaching workshops on money management and retirement planning through non-profit organizations.</li></ul>",
    },
    {
      id: 4,
      title: "Outside the Office",
      description:
        "<p>When he is not in the office, he and his wife, Rachel, love to travel to their three daughters and seven grandchildren.</p><p><em>\u201CYou can be young without money, but you cannot be old without it.\u201D</em></p>",
    },
  ];
}

function createBlankProfile() {
  return {
    id: Date.now(),
    name: "",
    designation: "",
    company: "",
    email: "",
    phone: "",
    linkedin: "",
    twitter: "",
    country_id: "",
    state_id: "",
    city_id: "",
    country_name: "",
    state_name: "",
    city_name: "",
    profileImage: "",
    primaryColor: "#f0c743",
    secondaryColor: "#111111",
    textColor: "#222222",
    formColor: "#ffffff",
    dpColor: "#111111",
    sections: [],
  };
}

function Home() {
  const STORAGE_KEY = "profiles";

  useEffect(() => {
    countryApi().catch((err) => console.error("Country fetch failed:", err));
  }, []);

  const defaultProfiles = [
    {
      id: 1,
      name: "Joshua Freedman",
      designation: "Senior Financial Consultant",
      company: "Green Wealth Management",
      email: "joshuafreedman@gwmg.com",
      phone: "1234567890",
      linkedin: "linkedin.com/joshuafreedman",
      twitter: "@JoshuaFreedman",
      country_id: "",
      state_id: "",
      city_id: "",
      country_name: "",
      state_name: "",
      city_name: "",
      profileImage: "",
      primaryColor: "#f0c743",
      secondaryColor: "#111111",
      textColor: "#222222",
      dpColor: "#111111",
      sections: getDefaultSections(),
    },
  ];

  const [profiles, setProfiles] = useState(() => {
    if (typeof window === "undefined") return defaultProfiles;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultProfiles;
    } catch {
      return defaultProfiles;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
  }, [profiles]);

  const [mode, setMode] = useState("list"); // "list" | "add" | "edit" | "view"
  const [editIndex, setEditIndex] = useState(null);
  const [draft, setDraft] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      setMode("list");
      setDraft(null);
      setEditIndex(null);
      setError("");
      return;
    }

    if (path === "/profiles/new") {
      setDraft(createBlankProfile());
      setEditIndex(null);
      setError("");
      setMode("add");
      return;
    }

    const idMatch = path.match(REGEX.profileRoute);
    if (idMatch) {
      const profileId = Number(idMatch[1]);
      const index = profiles.findIndex((profile) => profile.id === profileId);

      if (index === -1) {
        navigate("/", { replace: true });
        return;
      }

      if (path.endsWith("/edit")) {
        setDraft(JSON.parse(JSON.stringify(profiles[index])));
        setEditIndex(index);
        setError("");
        setMode("edit");
        return;
      }

      setEditIndex(index);
      setMode("view");
    }
  }, [location.pathname, navigate, profiles]);

  function handleAdd() {
    setDraft(createBlankProfile());
    setEditIndex(null);
    setError("");
    setMode("add");
    navigate("/profiles/new");
  }

  function handleEdit(index) {
    const profile = profiles[index];
    setDraft(JSON.parse(JSON.stringify(profile)));
    setEditIndex(index);
    setError("");
    setMode("edit");
    navigate(`/profiles/${profile.id}/edit`);
  }

  function handleView(index) {
    const profile = profiles[index];
    setEditIndex(index);
    setMode("view");
    navigate(`/profiles/${profile.id}`);
  }

  function handleDelete(index) {
    setProfiles(profiles.filter((_, i) => i !== index));
  }

  function handleSave() {
    const validationError = validateProfile(draft);

    if (validationError) {
      setError(validationError);
      return;
    }

    if (mode === "add") {
      setProfiles([...profiles, draft]);
    } else if (mode === "edit") {
      const updated = [...profiles];
      updated[editIndex] = draft;
      setProfiles(updated);
    }
    setMode("list");
    setDraft(null);
    setError("");
    navigate("/");
  }

  function handleCancel() {
    setMode("list");
    setDraft(null);
    setEditIndex(null);
    setError("");
    navigate("/");
  }

// Draft updaters

  function changeDraftField(field, value) {
    if (typeof field === "object" && field !== null) {
      setDraft((prev) => (prev ? { ...prev, ...field } : prev));
    } else {
      setDraft((prev) => (prev ? { ...prev, [field]: value } : prev));
    }
  }

  function changeSectionField(sectionId, field, value) {
    setDraft((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        sections: prev.sections.map((s) =>
          s.id === sectionId ? { ...s, [field]: value } : s,
        ),
      };
    });
  }


  function addSection() {
    setDraft((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        sections: [
          ...prev.sections,
          {
            id: Date.now(),
            title: "New Title",
            description: "<p> Write here.</p>",
          },
        ],
      };
    });
  }

  function removeSection(sectionId) {
    setDraft((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        sections: prev.sections.filter((s) => s.id !== sectionId),
      };
    });
  }

  //  Download / Print
  function getPrintableMarkup(node) {
    if (!node) return "";
    const clone = node.cloneNode(true);
    clone.style.width = "100%";
    clone.style.maxWidth = "820px";
    clone.style.margin = "0 auto";
    clone.style.boxSizing = "border-box";

    return `
      <!doctype html>
      <html>
        <head>
          <title>Profile Preview</title>
          <style>
            * { box-sizing: border-box; }
            body {
              margin: 0;
              background: #ffffff;
              font-family: Arial, sans-serif;
              color: #222;
            }
            @media print {
              body { background: #fff; }
              .print-shell { margin: 0 !important; }
            }
          </style>
        </head>
        <body>
          <div class="print-shell">${clone.outerHTML}</div>
        </body>
      </html>
    `;
  }

  function downloadJpeg(node) {
    if (!node) return;

    const markup = node.outerHTML;
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="820" height="980">
        <foreignObject width="820" height="980">
          <div xmlns="http://www.w3.org/1999/xhtml" style="width:820px;height:980px;background:#f3f3f3;font-family:Arial,sans-serif;color:#222;padding:0;box-sizing:border-box;">
            ${markup}
          </div>
        </foreignObject>
      </svg>`;

    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 820;
      canvas.height = 980;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        URL.revokeObjectURL(url);
        return;
      }

      ctx.fillStyle = "#f3f3f3";
      ctx.fillRect(0, 0, 820, 980);
      ctx.drawImage(img, 0, 0);

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpeg", 0.9);
      link.download = `profile-preview.jpeg`;
      link.click();
      URL.revokeObjectURL(url);
    };

    img.src = url;
  }

  function downloadPdf(node) {
    const win = window.open("", "_blank", "width=900,height=1100");
    if (!win) {
      alert("Please allow popups to save as PDF.");
      return;
    }

    win.document.write(getPrintableMarkup(node));
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 300);
  }

  function printProfile(node, format = "pdf") {
    const win = window.open("", "_blank", "width=900,height=1100");
    if (!win) {
      alert("Please allow popups.");
      return;
    }

    const printMessage =
      format === "image"
        ? "Print the profile image preview from the browser print dialog."
        : "Print this profile as a PDF using the browser's save as PDF option.";

    win.document.write(getPrintableMarkup(node));
    win.document.close();
    win.focus();
    win.alert(printMessage);
    win.print();
  }

  // ── LIST ──
  if (mode === "list") {
    return (
      <div className="shell">
        <div className="top-bar">
          <h1>Profile Builder</h1>
          <button className="btn yellow" onClick={handleAdd}>
            + Add New
          </button>
        </div>

        {profiles.length === 0 && (
          <p style={{ textAlign: "center", color: "#888", padding: "40px" }}>
            No profiles yet. Click <b>+ Add New</b> to start.
          </p>
        )}

        <div className="card-list">
          {profiles.map((p, i) => (
            <div className="card-row" key={p.id}>
              <div>
                <strong>{p.name}</strong>
                <span className="sub">
                  {p.designation} — {p.company}
                </span>
              </div>
              <div className="row-btns">
                <button className="btn yellow" onClick={() => handleView(i)}>
                  Preview
                </button>
                <button className="btn yellow" onClick={() => handleEdit(i)}>
                  Edit
                </button>
                <Delete index={i} onDelete={handleDelete} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === "view") {
    const p = profiles[editIndex];
    const viewProps = {
      profile: p,
      downloadJpeg,
      downloadPdf,
      printProfile,
      handleCancel,
    };

    return <View {...viewProps} />;
  }

  if (draft) {
    const addEditProps = {
      mode,
      draft,
      error,
      handleSave,
      handleCancel,
      changeDraftField,
      changeSectionField,
      addSection,
      removeSection,
    };

    return <AddEdit {...addEditProps} />;
  }

  return null;
}

export default Home;

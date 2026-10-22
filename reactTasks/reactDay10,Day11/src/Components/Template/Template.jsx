function Template({ profile }) {
  const name = profile?.name || "Your Name";
  const designation = profile?.designation || "Your Designation";
  const company = profile?.company || "Your Company";
  const email = profile?.email || "you@example.com";
  const phone = profile?.phone || "+1 234 56789";
  const linkedin = profile?.linkedin || "linkedin.com/in/yourname";
  const twitter = profile?.twitter || "@yourhandle";
  const sections = profile?.sections || [];
  // rang
  const primary = profile?.primaryColor || "#f0c743";
  const secondary = profile?.secondaryColor || "#111111";
  const textCol = profile?.textColor || "#222222";
  const formColor = profile?.formColor || "#ffffff";
  const profileImage = profile?.profileImage || "";
  const location = [
    profile?.country_name,
    // profile?.state_name,
    profile?.city_name,
  ]
    // .filter(Boolean) 
    .join(" - ");
  const initialColor = profile?.dpColor || secondary;
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "28px 24px",
        boxSizing: "border-box",
        background: "#f3f3f3",
        fontFamily: "Arial, sans-serif",
        color: textCol,
      }}
    >
      {/* Main white card */}
      <div
        style={{
          background: formColor,
          borderRadius: "28px",
          overflow: "hidden",
          padding: "26px 28px 20px",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            minHeight: "340px",
            padding: "10px 0 28px",
            boxSizing: "border-box",
            background: formColor,
          }}
        >
          {/* Yellow circular accent */}
          <div
            style={{
              position: "absolute",
              right: "5%",
              top: "12px",
              width: "min(42vw, 300px)",
              maxWidth: "300px",
              height: "min(42vw, 300px)",
              maxHeight: "300px",
              minWidth: "190px",
              minHeight: "190px",
              borderRadius: "50%",
              background: primary,
            }}
          />

          {/* White profile information circle */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "57%",
              minHeight: "270px",
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: "4px 7px 3px rgba(0,0,0,0.12)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "18px 12px",
              boxSizing: "border-box",
            }}
          >
            <h1
              style={{
                margin: "0",
                fontSize: "clamp(27px, 4.6vw, 40px)",
                fontWeight: 800,
                lineHeight: 1.08,
                color: secondary,
                overflowWrap: "anywhere",
              }}
            >
              {name}
            </h1>

            <div
              style={{
                display: "block",
                width: "100%",
                background: primary,
                padding: "6px 8px",
                marginTop: "14px",
                fontWeight: 500,
                fontSize: "clamp(9px, 1.5vw, 13px)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: secondary,
                boxSizing: "border-box",
              }}
            >
              {designation}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginTop: "20px",
                fontWeight: 500,
                fontSize: "14px",
                textAlign: "left",
              }}
            >
              <span>{company}</span>
            </div>

            {location && (
              <div
                style={{
                  marginTop: "12px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: secondary,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {location}
              </div>
            )}
          </div>

          {/* Right circular profile placeholder */}
          <div
            style={{
              position: "absolute",
              zIndex: 1,
              right: "0",
              top: "0",
              width: "47%",
              height: "310px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: profileImage ? "#f4f4f4" : initialColor,
                border: "4px solid #fff",
              }}
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt={`${name} profile`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>

        {/* Middle: Dynamic sections in 2-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "stretch",
            columnGap: "0",
            rowGap: "0",
          }}
        >
          {sections.map((section, i) => (
            <div
              key={section.id || i}
              style={{
                minWidth: 0,
                padding: "18px 16px 22px 8px",
                boxSizing: "border-box",
                borderTop: "1px solid #dedede",
                borderRight: i % 2 === 0 ? "2px solid #d5d5d5" : "none",
                borderLeft: i % 2 === 1 ? "none" : "none",
                borderBottom: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "14px",
                  minHeight: "58px",
                }}
              >
                <span
                  style={{
                    width: "62px",
                    height: "62px",
                    borderRadius: "50%",
                    background: primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    flexShrink: 0,
                  }}
                >
                  {["🎓", "🧰", "🏆", "☀️", "📋", "💡", "🔗", "⭐"][i % 8]}
                </span>

                <h2
                  style={{
                    margin: 0,
                    fontSize: "clamp(17px, 2.5vw, 22px)",
                    fontWeight: 800,
                    fontStyle: "normal",
                    lineHeight: 1.2,
                    color: secondary,
                    overflowWrap: "anywhere",
                  }}
                >
                  {section.title}
                </h2>
              </div>

              <div
                style={{
                  fontSize: "13px",
                  lineHeight: 1.5,
                  color: textCol,
                  overflowWrap: "anywhere",
                }}
                dangerouslySetInnerHTML={{
                  __html: section.description || "<p>Description here.</p>",
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom: Contact information */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px 20px",
            borderTop: "1px solid #bdbdbd",
            padding: "20px 8px 4px",
            marginTop: "0",
          }}
        >
          {[
            { icon: "✉", text: email },
            { icon: "in", text: linkedin },
            { icon: "☎", text: phone },
            { icon: "@", text: twitter },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                minWidth: 0,
                fontSize: "11px",
                fontWeight: 500,
                lineHeight: 1.4,
                overflowWrap: "anywhere",
              }}
            >
              <span
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: primary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "15px",
                  fontWeight: 800,
                  color: secondary,
                }}
              >
                {item.icon}
              </span>

              <span style={{ minWidth: 0 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Template;

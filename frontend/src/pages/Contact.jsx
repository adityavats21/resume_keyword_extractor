export default function Contact() {
  return (
    <div
      style={{
        paddingTop: "140px",
        paddingBottom: "80px",
        textAlign: "center",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "38px",
          fontWeight: 800,
          color: "#4da8ff",
          marginBottom: "20px",
        }}
      >
        Contact Developer
      </h1>

      <p
        style={{
          fontSize: "18px",
          maxWidth: "700px",
          margin: "0 auto",
          color: "#cbd5e1",
        }}
      >
        Have questions, feedback, or suggestions? I’d love to hear from you!
        ResumeAI was built with passion to help students perform better in
        placement screenings.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "inline-block",
          background: "rgba(255,255,255,0.08)",
          padding: "25px 40px",
          borderRadius: "16px",
          boxShadow: "0 6px 25px rgba(0,0,0,0.4)",
          backdropFilter: "blur(6px)",
          textAlign: "left",
        }}
      >
        <p style={{ fontSize: "18px", marginBottom: "12px" }}>
           <strong style={{ color: "#4da8ff" }}>Developer:</strong> Aditya Vats
        </p>
        <p style={{ fontSize: "18px", marginBottom: "12px" }}>
          <strong style={{ color: "#4da8ff" }}>Email:</strong> vatsaditya21@gmail.com
        </p>
        <p style={{ fontSize: "18px" }}>
           <strong style={{ color: "#4da8ff" }}>Location:</strong> VIT – Computer Science
        </p>
      </div>

      <p
        style={{
          marginTop: "40px",
          fontSize: "15px",
          color: "#9ca3af",
        }}
      >
        © {new Date().getFullYear()} ResumeAI — Built by <b>Aditya Vats</b>
      </p>
    </div>
  );
}
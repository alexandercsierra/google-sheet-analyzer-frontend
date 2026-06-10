const GeminiAnswer = ({ answer }) => {
  const answerParagraphs = answer.split("\n\n");

  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#192238",
      }}
    >
      <p style={{ textAlign: "left", marginBottom: "15px" }}>
        Gemini's Answer:
      </p>
      {answerParagraphs.map((para) => {
        return (
          <p style={{ textAlign: "left", marginBottom: "10px" }}>{para}</p>
        );
      })}
    </div>
  );
};

export default GeminiAnswer;

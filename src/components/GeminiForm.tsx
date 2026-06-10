import CustomInput from "./CustomInput";
import SubmitButton from "./SubmitButton";

function GeminiForm({
  askGemini,
  columnTitles,
  rowData,
  setQuestion,
  question,
}) {
  const handleAskQuestion = ({ question }) => {
    askGemini({
      prompt: `Given the following data from a google sheet: ${JSON.stringify({
        columnTitles,
        rowData,
      })}, answer the following question please, and format your answer neatly in paragraphs in markdown: ${question}`,
    });
  };

  return (
    <div
      style={{
        margin: "10px auto",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontWeight: "800",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        Ask Gemini about Data
      </h2>
      <CustomInput
        placeholder="Ask Gemini about data"
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
        value={question}
      />
      <SubmitButton
        label="Ask Gemini"
        onClick={() =>
          handleAskQuestion({
            question,
          })
        }
      />
    </div>
  );
}

export default GeminiForm;

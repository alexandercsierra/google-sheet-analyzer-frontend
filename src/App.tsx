import { useState } from "react";
import "./App.css";
import DataTable from "./components/DataTable";
import useAPI from "./hooks/useAPI";
import CustomInput from "./components/CustomInput";

const RANGE = "A1:G68";
const SHEET = "Sheet1";

function App() {
  const [sheetUrl, setSheetUrl] = useState<string>("");
  const {
    fetchSheetData,
    askGemini,
    columnTitles,
    rowData,
    answer,
    question,
    setQuestion,
  } = useAPI();

  const handleFetchData = ({ sheet, range }) => {
    fetchSheetData({
      sheetUrl,
      sheet,
      range,
    });
  };

  const handleAskQuestion = ({ question }) => {
    askGemini({
      prompt: `Given the following data from a google sheet: ${JSON.stringify({
        columnTitles,
        rowData,
      })}, answer the following question please, and format your answer neatly in paragraphs in markdown: ${question}`,
    });
  };

  return (
    <>
      <section id="center">
        <div>
          <h1>Google Sheets Analyzer</h1>
        </div>
        <CustomInput
          style={{
            width: "50%",
            fontSize: "1.5rem",
          }}
          placeholder="Paste the URL to your google sheet"
          onChange={(e) => {
            setSheetUrl(e.target.value);
          }}
          value={sheetUrl}
        />
        <button
          style={{
            fontSize: "1.5rem",
            padding: "0.5rem 1rem",
            marginLeft: "1rem",
            borderRadius: "30px",
          }}
          onClick={() =>
            handleFetchData({
              sheet: SHEET,
              range: RANGE,
            })
          }
        >
          Get sheet data
        </button>
        <CustomInput
          style={{
            width: "50%",
            fontSize: "1.5rem",
          }}
          placeholder="Ask Gemini about data"
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          value={question}
        />
        <button
          style={{
            fontSize: "1.5rem",
            padding: "0.5rem 1rem",
            marginLeft: "1rem",
            borderRadius: "30px",
          }}
          onClick={() =>
            handleAskQuestion({
              question,
            })
          }
        >
          Get sheet data
        </button>
        <p>Gemini's Answer: {answer}</p>
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DataTable columnTitles={columnTitles} rowData={rowData} />
      </div>
    </>
  );
}

export default App;

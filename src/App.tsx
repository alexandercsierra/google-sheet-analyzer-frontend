import { useState } from "react";
import "./App.css";
import DataTable from "./components/DataTable";
import useAPI from "./hooks/useAPI";

const RANGE = "A1:G68";
const SHEET = "Sheet1";

function App() {
  const [columnTitles, setColumnTitles] = useState<string[]>([]);
  const [rowData, setRowData] = useState<any[]>([]);
  const [sheetUrl, setSheetUrl] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  const { fetchSheetData, askGemini } = useAPI();

  const handleFetchData = ({ sheet, range }) => {
    fetchSheetData({
      sheetUrl,
      sheet,
      range,
      setColumnTitles,
      setRowData,
    });
  };

  const handleAskQuestion = ({ question, setAnswer }) => {
    askGemini({
      prompt: `Given the following data from a google sheet: ${JSON.stringify({
        columnTitles,
        rowData,
      })}, answer the following question please, and format your answer neatly in paragraphs in markdown: ${question}`,
      setAnswer,
    });
  };

  return (
    <>
      <section id="center">
        <div>
          <h1>Google sheets</h1>
        </div>
        <input
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
        <input
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
              setAnswer,
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

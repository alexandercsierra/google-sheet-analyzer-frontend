import "./App.css";
import DataTable from "./components/DataTable";
import useAPI from "./hooks/useAPI";
import SheetForm from "./components/SheetForm";
import GeminiForm from "./components/GeminiForm";
import { useEffect } from "react";
import useWakeAPI from "./hooks/useWakeAPI";
import GeminiAnswer from "./components/GeminiAnswer";

function App() {
  const {
    fetchSheetData,
    askGemini,
    columnTitles,
    rowData,
    answer,
    question,
    setQuestion,
  } = useAPI();

  // make sure API ready to receive data on free tier
  useEffect(() => {
    useWakeAPI();
  }, []);

  return (
    <>
      <section>
        <div
          style={{
            paddingTop: "50px",
            paddingBottom: "50px",
            background: "#6e1a1a",
          }}
        >
          <h1>Google Sheets Analyzer</h1>
        </div>
        <SheetForm fetchSheetData={fetchSheetData} />
        <GeminiForm
          askGemini={askGemini}
          columnTitles={columnTitles}
          rowData={rowData}
          setQuestion={setQuestion}
          question={question}
        />
      </section>
      {answer && <GeminiAnswer answer={answer} />}
      {Object.keys(columnTitles).length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DataTable columnTitles={columnTitles} rowData={rowData} />
        </div>
      )}
    </>
  );
}

export default App;

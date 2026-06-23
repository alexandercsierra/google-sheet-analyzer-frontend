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
    isLoadingSheets,
    isLoadingGemini,
  } = useAPI();

  // make sure API ready to receive data on free tier
  useEffect(() => {
    useWakeAPI();
  }, []);

  return (
    <>
      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          background: "#6e1a1a",
        }}
      >
        <h1>Google Sheets Analyzer</h1>
      </div>
      <SheetForm fetchSheetData={fetchSheetData} isLoading={isLoadingSheets} />
      <div
        style={{
          maxHeight: "500px",
          overflowY: "scroll",
          background: "#1c1d25",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        {Object.keys(columnTitles).length > 0 && (
          <SheetData titles={columnTitles} rows={rowData} />
        )}
      </div>
      {rowData?.length > 0 && (
        <div style={{ paddingBottom: "300px" }}>
          <GeminiForm
            askGemini={askGemini}
            columnTitles={columnTitles}
            rowData={rowData}
            setQuestion={setQuestion}
            question={question}
            isLoading={isLoadingGemini}
          />
          {answer && <GeminiAnswer answer={answer} />}
        </div>
      )}
    </>
  );
}

const SheetData = ({ titles, rows }) => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "100%",
        overflowX: "scroll",
      }}
    >
      <DataTable columnTitles={titles} rowData={rows} />
    </div>
  );
};

export default App;

import "./App.css";
import DataTable from "./components/DataTable";
import useAPI from "./hooks/useAPI";
import SheetForm from "./components/SheetForm";
import GeminiForm from "./components/GeminiForm";

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

  return (
    <>
      <section>
        <div>
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

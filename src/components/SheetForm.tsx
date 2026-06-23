import { useState } from "react";
import CustomInput from "./CustomInput";
import SubmitButton from "./SubmitButton";

const DEFAULT_SHEET_URL = import.meta.env.VITE_DEFAULT_SHEET_URL;
const DEFAULT_SHEET_NAME = import.meta.env.VITE_DEFAULT_SHEET_NAME;
const DEFAULT_CELL_RANGE = import.meta.env.VITE_DEFAULT_CELL_RANGE;

function SheetForm({ fetchSheetData, isLoading }) {
  const [sheetUrl, setSheetUrl] = useState<string>("");
  const [sheetName, setSheetName] = useState<string>("");
  const [cellRange, setCellRange] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const useDefaultData = () => {
    setSheetUrl(DEFAULT_SHEET_URL);
    setSheetName(DEFAULT_SHEET_NAME);
    setCellRange(DEFAULT_CELL_RANGE);
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
        Add your Google Sheet Data
      </h2>
      <button
        onClick={useDefaultData}
        style={{
          background: "none",
          textDecoration: "underline",
          border: "none",
          boxShadow: "none",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        use example data
      </button>
      <CustomInput
        label="Spreadsheet URL"
        placeholder="Paste the URL to your google spreadsheet"
        subtitle="please make sure your sheet is public"
        onChange={(e) => {
          setSheetUrl(e.target.value);
        }}
        value={sheetUrl}
      />
      <CustomInput
        label="Tab/Sheet Name"
        placeholder="Choose your tab/sheet name"
        onChange={(e) => {
          setSheetName(e.target.value);
        }}
        value={sheetName}
      />
      <CustomInput
        label="Cell Range"
        placeholder="Choose your cell range, for example: A1:C50"
        onChange={(e) => {
          setCellRange(e.target.value);
        }}
        value={cellRange}
      />
      <SubmitButton
        isLoading={isLoading}
        label="get sheet data"
        onClick={() => {
          if (!sheetUrl || !sheetName || !cellRange) {
            setErrorMessage(
              "Make sure you have a url, sheet name, and cell range"
            );
            return;
          }
          setErrorMessage("");
          fetchSheetData({
            sheetUrl,
            sheet: sheetName,
            range: cellRange,
          });
        }}
      />
      <p>{errorMessage}</p>
    </div>
  );
}

export default SheetForm;

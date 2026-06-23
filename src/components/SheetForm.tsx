import { useState } from "react";
import CustomInput from "./CustomInput";
import SubmitButton from "./SubmitButton";

function SheetForm({ fetchSheetData }) {
  const [sheetUrl, setSheetUrl] = useState<string>(
    import.meta.env.VITE_DEFAULT_SHEET || ""
  );
  const [sheetName, setSheetName] = useState<string>("Sheet1");
  const [cellRange, setCellRange] = useState<string>("A1:C10");

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
        placeholder="Choose your cell range (A1:C50)"
        onChange={(e) => {
          setCellRange(e.target.value);
        }}
        value={cellRange}
      />
      <SubmitButton
        label="get sheet data"
        onClick={() =>
          fetchSheetData({
            sheetUrl,
            sheet: sheetName,
            range: cellRange,
          })
        }
      />
    </div>
  );
}

export default SheetForm;

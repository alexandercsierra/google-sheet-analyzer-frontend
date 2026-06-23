import axios from "axios";
import { useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useAPI = () => {
  const [columnTitles, setColumnTitles] = useState<string[]>([]);
  const [rowData, setRowData] = useState<any[]>([]);
  const [answer, setAnswer] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [isLoadingSheets, setIsLoadingSheets] = useState<boolean>(false);
  const [isLoadingGemini, setIsLoadingGemini] = useState<boolean>(false);

  const fetchSheetData = ({ sheetUrl, sheet, range }) => {
    setIsLoadingSheets(true);
    const sheetID = sheetUrl.split("/d/")[1].split("/")[0];

    axios
      .post(`${BASE_URL}/sheetData`, {
        sheetID,
        sheet,
        range,
      })
      .then((response) => {
        console.log("Sheet data:", response.data);
        if (response.data.values && response.data.values.length > 0) {
          console.log("hey if were here there should be column titles");
          setColumnTitles(response.data.values[0]);
          setRowData(response.data.values.slice(1));
        }
      })
      .catch((error) => {
        console.error("Error fetching sheet data:", error);
      })
      .finally(() => setIsLoadingSheets(false));
  };

  const askGemini = ({ prompt }) => {
    setIsLoadingGemini(true);
    axios
      .post(`${BASE_URL}/askGemini`, {
        prompt,
      })
      .then((response) => {
        setAnswer(response.data.answer);
      })
      .catch((error) => {
        console.error("Error asking Gemini:", error);
      })
      .finally(() => setIsLoadingGemini(false));
  };

  return {
    fetchSheetData,
    askGemini,
    columnTitles,
    rowData,
    answer,
    question,
    setQuestion,
    setIsLoadingSheets,
    isLoadingSheets,
    isLoadingGemini,
    setIsLoadingGemini,
  };
};

export default useAPI;

import axios from "axios";

const BASE_URL = "http://localhost:8080";

const useAPI = () => {
  const fetchSheetData = ({
    sheetUrl,
    sheet,
    range,
    setColumnTitles,
    setRowData,
  }) => {
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
      });
  };

  const askGemini = ({ prompt, setAnswer }) => {
    axios
      .post(`${BASE_URL}/askGemini`, {
        prompt,
      })
      .then((response) => {
        console.log("Gemini response:", response.data);
        setAnswer(response.data.answer);
      })
      .catch((error) => {
        console.error("Error asking Gemini:", error);
      });
  };

  return { fetchSheetData, askGemini };
};

export default useAPI;

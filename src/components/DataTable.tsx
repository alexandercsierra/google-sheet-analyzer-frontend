const DataTable = ({ columnTitles, rowData }) => {
  const COL_WIDTH = 200;
  return (
    <table
      style={{
        border: "1px solid #555555",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      <thead
        style={{
          width: "100%",
          background: "#1f1f1f",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <tr
          style={{
            display: "flex",
          }}
        >
          {columnTitles.map((title, index) => (
            <th
              key={index}
              style={{
                width: `${COL_WIDTH}px`,
                textAlign: "left",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowData.map((row, rowIndex) => {
          return (
            <tr
              key={rowIndex}
              style={{
                display: "flex",
                background: rowIndex % 2 !== 0 ? "#393939" : "",
              }}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{ textAlign: "center", width: `${COL_WIDTH}px` }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;

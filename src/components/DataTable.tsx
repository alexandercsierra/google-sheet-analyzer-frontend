const DataTable = ({ columnTitles, rowData }) => {
  return (
    <table
      style={{
        border: "1px solid #555555",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        margin: "0 auto",
        borderCollapse: "collapse",
        width: "max-content",
      }}
    >
      <thead
        style={{
          background: "#1f1f1f",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <tr>
          {columnTitles.map((title, index) => (
            <th
              key={index}
              style={{
                textAlign: "left",
                padding: "12px 16px",
                whiteSpace: "nowrap",
                color: "#ffffff",
              }}
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowData.map((row, rowIndex) => {
          const rowBgColor = rowIndex % 2 !== 0 ? "#393939" : "";

          return (
            <tr
              key={rowIndex}
              style={{
                background: rowBgColor,
              }}
            >
              {columnTitles.map((_, colIndex) => {
                const cell = row[colIndex];
                const isEmpty =
                  cell === undefined || cell === null || cell === "";

                return (
                  <td
                    key={colIndex}
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      whiteSpace: "nowrap",
                      background: rowBgColor,
                      borderLeft: "1px solid black",
                      borderRight: "1px solid black",
                    }}
                  >
                    {/* Render a non-breaking space if empty so the cell preserves height */}
                    {isEmpty ? "\u00A0" : cell}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;

const SubmitButton = ({ style = {}, onClick, label = "" }) => {
  return (
    <button
      style={{
        margin: "15px",
        fontSize: "1rem",
        fontWeight: "800",
        padding: "10px 15px",
        borderRadius: "30px",
        border: "none",
        backgroundColor: "#147836",
        cursor: "pointer",
        ...style,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SubmitButton;

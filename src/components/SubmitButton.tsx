import LoadingSpinner from "./LoadingSpinner";

const SubmitButton = ({
  style = {},
  onClick,
  label = "",
  isLoading = false,
}) => {
  return (
    <button
      style={{
        margin: "15px",
        fontSize: "1rem",
        fontWeight: "800",
        padding: "0 20px",
        height: "44px",
        minWidth: "140px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        borderRadius: "30px",
        border: "none",
        backgroundColor: "#147836",
        color: "#FFF",
        cursor: "pointer",
        ...style,
      }}
      onClick={onClick}
    >
      {isLoading ? <LoadingSpinner /> : label}
    </button>
  );
};

export default SubmitButton;

const CustomInput = ({
  label = "",
  placeholder,
  style = {},
  onChange,
  value,
}: {
  label?: string;
  placeholder: string;
  style?: React.CSSProperties;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {label && <h4 style={{ marginBottom: "8px" }}>{label}</h4>}
      <input
        style={{
          width: "100%",
          fontSize: "1rem",
          borderRadius: "10px",
          border: "none",
          padding: "10px",
          ...style,
        }}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CustomInput;

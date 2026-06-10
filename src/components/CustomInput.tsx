const CustomInput = ({
  placeholder,
  style = {},
  onChange,
  value,
}: {
  placeholder: string;
  style?: React.CSSProperties;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return (
    <input
      style={{
        width: "50%",
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
  );
};

export default CustomInput;

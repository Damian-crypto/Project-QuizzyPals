import { TextField } from "@mui/material";

<<<<<<< HEAD
const FormInputComponent = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  isRequired = false,
}) => {
  return (
    <>
      <div className="form-component-container">{label}</div>

      <TextField
        className="form-component"
        value={value}
        label={placeholder}
        variant="standard"
        type={type}
        onChange={onChange}
        required={isRequired}
      />
    </>
  );
=======
const FormInputComponent = ({ type, label, placeholder, value, onChange }) => {
    return (
        <>
            <div className="form-component-container">{label}</div>

            <TextField
                className="form-component"
                value={value}
                label={placeholder}
                variant="standard"
                type={type}
                onChange={onChange}
            />
        </>
    );
>>>>>>> 67cc81a (added editorconfig file)
};

export default FormInputComponent;

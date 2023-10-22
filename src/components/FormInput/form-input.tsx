import type { InputHTMLAttributes } from "react";

type FromInputProperties = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function FormInput({
  label,
  ...otherProperties
}: FromInputProperties): JSX.Element {
  return (
    <div className="group">
      <input {...otherProperties} />
      {label && <div className="form-input-label">{label}</div>}
    </div>
  );
}

export default FormInput;

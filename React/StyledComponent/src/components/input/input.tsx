/* eslint-disable react/require-default-props */
import { Field } from "formik";
import ContainerInput from "./styled";

interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  styling?: "checkbox" | "base";
}
const tipo: React.CSSProperties = { flexDirection: "row" };
const base: React.CSSProperties = { flexDirection: "column" };
const Input = ({ styling = "base", name, label, ...rest }: IInput) => {
  const style = styling === "base" ? base : tipo;
  return (
    // If ternario abaixo
    // style={{flexDirection:rest.type==="checkbox"?"row":"column" }}
    <ContainerInput style={style}>
      {rest.type !== "checkbox" && <label htmlFor={name}>{label}</label>}
      <Field {...rest} name={name} />
      {rest.type === "checkbox" && <label htmlFor={name}>{label}</label>}
    </ContainerInput>
  );
};

export default Input;

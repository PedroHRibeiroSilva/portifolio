/* eslint-disable react/button-has-type */
import ContainerButton from "./style";

interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string;
}
const Button = ({ type = "button", text, ...rest }: IButton) => {
  return (
    <ContainerButton>
      <button type={type} {...rest}>
        {text}
      </button>
    </ContainerButton>
  );
};

export default Button;

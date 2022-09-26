import ContainerHeader from "./styles";
import { Canequei } from "../../assets/images";

const Header = () => {
  return (
    <ContainerHeader>
      Canequei
      <img src={Canequei} alt="" />
    </ContainerHeader>
  );
};

export default Header;

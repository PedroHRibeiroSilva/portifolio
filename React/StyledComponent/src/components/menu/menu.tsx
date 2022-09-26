import { useState } from "react";
import { Link } from "react-router-dom";
import { Item, Items, Nav } from "./styles";

const Menu = () => {
  const [menuActive, setMenuActive] = useState("Todos");

  return (
    <Nav>
      <Items>
        <Item isActive={menuActive === "Todos"}>
          <Link to="/shop" onClick={() => setMenuActive("Todos")}>
            Todas
          </Link>
        </Item>
        <Item isActive={menuActive === "Coleções"}>
          <Link to="/colections" onClick={() => setMenuActive("Coleções")}>
            Coleções
          </Link>
        </Item>
        <Item isActive={menuActive === "Personalize"}>
          <Link to="/custom" onClick={() => setMenuActive("Personalize")}>
            Personalize
          </Link>
        </Item>
        <Item isActive={menuActive === "Para Eventos"}>
          <Link to="/forevents" onClick={() => setMenuActive("Para Eventos")}>
            Para Eventos
          </Link>
        </Item>
      </Items>
    </Nav>
  );
};

export default Menu;

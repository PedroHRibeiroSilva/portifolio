import { Link } from "react-router-dom";
import { Formik } from "formik";
import Button from "../../components/button/button";
import { Canequei } from "../../assets/images";
import { ContainerSignup, SignUp, Div, ContainerHeaderSignu } from "./styles";
import Input from "../../components/input/input";

const Signup = () => {
  return (
    <Div>
      <ContainerHeaderSignu>
        Canequei
        <img src={Canequei} alt="" />
      </ContainerHeaderSignu>
      <ContainerSignup>
        <h2>Seja bem vindo</h2>
        <p>Precisamos de alguns dados para criar sua conta</p>
        <Formik
          initialValues={{
            password: "",
            email: "",
            nome: "",
            sobreNome: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit }) => (
            <SignUp onSubmit={handleSubmit}>
              <div style={{ margin: "0px" }}>
                <Input type="text" label="Nome" name="nome" style={{ margin: "2px 0px" }} />
              </div>
              <div style={{ margin: "0px" }}>
                <Input type="text" label="Sobrenome" name="sobreNome" style={{ margin: "2px 0px" }} />
              </div>
              <div style={{ margin: "0px" }}>
                <Input type="email" label="Email" name="email" style={{ margin: "2px 0px" }} />
              </div>
              <div style={{ margin: "0px" }}>
                <Input type="password" label="Senha" name="password" style={{ margin: "2px 0px" }} />
              </div>
              <Button
                type="submit"
                text="Quero me cadastrar"
                style={{ border: " 1px solid #fde047", color: "#fde047 ", backgroundColor: "white", padding: "15px" }}
              />
              <p>
                Ja tem uma conta? <Link to="/login">Faça Login</Link>
              </p>
            </SignUp>
          )}
        </Formik>
      </ContainerSignup>
    </Div>
  );
};
export default Signup;

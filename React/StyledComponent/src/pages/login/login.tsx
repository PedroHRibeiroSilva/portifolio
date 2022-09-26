import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Formik } from "formik";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { Canequei } from "../../assets/images";
import { Div } from "../signup/styles";
import { ContainerHeaderLogin, ContainerLogin, Logins } from "./styled";

const Login = () => {
  return (
    <Div>
      <ContainerHeaderLogin>
        Faça login em sua conta
        <img src={Canequei} alt="" />
      </ContainerHeaderLogin>
      <ContainerLogin>
        <Formik
          initialValues={{
            password: "",
            email: "",
            remember: false,
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit, values, setFieldValue }) => (
            <Logins onSubmit={handleSubmit}>
              <div style={{ width: "100%" }}>
                <Input type="email" label="Email" name="email" />
                <Input type="password" label="Senha" name="password" />
              </div>
              <div className="Link" style={{ display: "flex", width: "100%", margin: "10px" }}>
                <Input
                  onChange={() => setFieldValue("remember", !values.remember)}
                  name="remember"
                  checked={values.remember}
                  styling="checkbox"
                  type="checkbox"
                  label="Lembre-me"
                  style={{ margin: "2px" }}
                />
                <div style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
                  <Link to="/login">Esqueceu sua senha?</Link>
                </div>
              </div>
              <Button text="SignUp" type="submit" />
              <div style={{ display: "flex", width: "100%", margin: "15px", alignItems: "center", opacity: "0.65" }}>
                <div style={{ width: "100%", borderTop: "1px solid gray", height: "1px" }} />
                <p style={{ whiteSpace: "nowrap", width: "100%", margin: "0px 5px", fontSize: "14px" }}>
                  Canais de comunicação
                </p>
                <div style={{ width: "100%", borderTop: "1px solid gray", height: "1px" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", opacity: "0.65" }}>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      window.open("https://www.google.com", "_blank");
                    }}
                    style={{
                      cursor: "pointer ",
                      border: " 1px solid gray",
                      padding: "6px 50px",
                      background: "white",
                      borderRadius: "5px",
                    }}
                  >
                    <FaFacebook style={{ width: "20px", height: "20px" }} />
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      window.open("https://www.google.com", "_blank");
                    }}
                    style={{
                      cursor: "pointer ",
                      border: " 1px solid gray",
                      padding: "6px 50px",
                      background: "white",
                      borderRadius: "5px",
                    }}
                  >
                    <FaInstagram style={{ width: "20px", height: "20px" }} />
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      window.open("https://www.google.com", "_blank");
                    }}
                    style={{
                      cursor: "pointer ",
                      border: " 1px solid gray",
                      padding: "6px 50px",
                      background: "white",
                      borderRadius: "5px",
                    }}
                  >
                    <FaTwitter style={{ width: "20px", height: "20px" }} />
                  </button>
                </div>
              </div>
            </Logins>
          )}
        </Formik>
      </ContainerLogin>
    </Div>
  );
};
export default Login;

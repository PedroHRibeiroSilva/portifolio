import { useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import "./assets/styles/fonts.css";
import theme from "./assets/styles/theme";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Routes from "./routes";
import { Container, Layout } from "./styles";

const App = () => {
  const location = useLocation();
  const arrayRemoveHeader = ["/signup", "/login"];
  const removeHeader = arrayRemoveHeader.includes(location.pathname);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {!removeHeader && (
          <>
            <Header />
            <Menu />
          </>
        )}
        <Container>
          <Routes />
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

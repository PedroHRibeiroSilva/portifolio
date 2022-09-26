import Carousel from "../../components/carousel/carousel";
import { Banner } from "../../assets/images";

const Home = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
    }}
  >
    <Carousel images={[Banner]} />
  </div>
);

export default Home;

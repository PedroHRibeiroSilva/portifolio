import Carousel from "../../components/carousel/carousel";
import { Banner } from "../../assets/images";
import {
  ContainerCards,
  Card,
  CardImagem,
  CardTitle,
  CardReview,
  CardPrice,
  StarIcon,
  ContainerRating,
} from "./styles";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Caneca Modelo A",
      price: "R$ 40,99",
      rating: 5,
      reviewCount: 40,
      imageSrc: "https://m.media-amazon.com/images/I/411AWaag3+L._AC_SX679_.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 2,
      name: "Caneca Modelo B",
      price: "R$ 39,99",
      rating: 5,
      reviewCount: 18,
      imageSrc: "https://m.media-amazon.com/images/I/51jWQNDFfIL._AC_SX679_.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 3,
      name: "Caneca Modelo C",
      price: "R$ 39,99",
      rating: 5,
      reviewCount: 14,
      imageSrc:
        "https://71468.cdn.simplo7.net/static/71468/sku/pra-presentear-canecas-caneca-flork-namorados--p-1652366809408.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 4,
      name: "Caneca Modelo D",
      price: "R$ 39,99",
      rating: 4,
      reviewCount: 21,
      imageSrc:
        "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/498/397/products/canecas-site21-042cba0942cd3a563316489118407118-640-0.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 5,
      name: "Caneca Modelo E",
      price: "R$ 39,99",
      rating: 5,
      reviewCount: 38,
      imageSrc:
        "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/498/397/products/canecas-site21-042cba0942cd3a563316489118407118-640-0.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 6,
      name: "Caneca Modelo F",
      price: "R$ 39,99",
      rating: 5,
      reviewCount: 18,
      imageSrc:
        "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/498/397/products/canecas-site21-042cba0942cd3a563316489118407118-640-0.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 7,
      name: "Caneca Modelo G",
      price: "R$ 39,99",
      rating: 5,
      reviewCount: 14,
      imageSrc:
        "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/498/397/products/canecas-site21-042cba0942cd3a563316489118407118-640-0.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 8,
      name: "Caneca Modelo H",
      price: "R$ 39,99",
      rating: 4,
      reviewCount: 21,
      imageSrc: "https://alexmoria.com/wp-content/uploads/2019/12/canecas-alexmoria.jpeg",
      imageAlt: "TODO",
      href: "#",
    },
    // More products...
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Carousel images={[Banner, Banner, Banner, Banner, Banner]} />

      <ContainerCards>
        {products.map((item) => (
          <Card>
            <CardImagem>
              <img src={item.imageSrc} alt={item.imageAlt} />
            </CardImagem>
            <div>
              <CardTitle>{item.name}</CardTitle>
              <CardReview>
                <ContainerRating>
                  {[5, 4, 3, 2, 1].map((value) => (
                    <StarIcon active={item.rating >= value} />
                  ))}
                </ContainerRating>
                <p>{item.reviewCount} avaliações</p>
              </CardReview>
              <CardPrice>
                <span>{item.price}</span>
              </CardPrice>
            </div>
          </Card>
        ))}
      </ContainerCards>
    </div>
  );
};

export default Shop;

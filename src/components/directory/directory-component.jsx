import { DirectoryContainer } from "./directory-styles";
import DirectoryItem from "../directory-item/directory-item-component";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl:
      "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/india%20lob/embroidered%20and%20printed%20caps/in_embroidered_printed-caps_002",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5f7ceb20fd62c35cd57c4988/1618873667754-K1OFS4FE8BDVS49VVZ7Q/IMG_4935.JPG",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl:
      "https://www.bpmcdn.com/f/files/kelowna/import/2022-05/29204424_web1_220526-KCN-hype-store_1.jpg",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl:
      "https://www.thelist.com/img/gallery/the-best-clothing-stores-for-your-age/intro-1663675500.jpg",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl:
      "https://busynessprofile.com/wp-content/uploads/2021/05/F-3-Mens-Clothing-Store.jpg",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

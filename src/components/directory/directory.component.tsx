import { Key } from "react";

import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: "Mouses",
    imageUrl:
      "https://i.rtings.com/assets/pages/Fr5czRHa/best-gaming-mouse-202106-medium.jpg?format=auto",
    route: "shop/mouses",
  },
  {
    id: 2,
    title: "Keyboards",
    imageUrl:
      "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/04/rgb-lit-gaming-mechanical-keyboard.jpg",
    route: "shop/keyboards",
  },
  {
    id: 3,
    title: "Headphones",
    imageUrl:
      "https://cdn.arstechnica.net/wp-content/uploads/2021/10/Razer-Kraken-V3-HyperSense.jpg",
    route: "shop/headphones",
  },
  {
    id: 4,
    title: "Microphones",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/pi53aw4gWPHFeYSJu9oaaU.jpg",
    route: "shop/microphones",
  },
  {
    id: 5,
    title: "Chairs",
    imageUrl:
      "https://www.cnet.com/a/img/resize/fd110784c273cc2c155686e438a8341d9d9515e2/hub/2019/07/19/f6bba4b3-a9c8-4780-9a5f-3083a87fb16f/49-gaming-chairs.jpg?auto=webp&fit=crop&height=675&width=1200",
    route: "shop/chairs",
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

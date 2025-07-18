import { StaticImageData } from "next/image";

export interface IHomeCard {
  title: string;
  description: string;
  image: StaticImageData;
  path: string;
}

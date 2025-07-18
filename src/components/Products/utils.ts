import { IProduct } from "./types";

export const handleFavoriteClick = (
  e: React.MouseEvent,
  product: IProduct,
  favoriteProducts: IProduct[],
  setFavoriteProducts: (products: IProduct[]) => void
) => {
  e.stopPropagation();
  e.preventDefault();
  if (favoriteProducts.some((p) => p.id === product.id)) {
    setFavoriteProducts(favoriteProducts.filter((p) => p.id !== product.id));
  } else {
    setFavoriteProducts([...favoriteProducts, product]);
  }
};

import React from "react";
import { ProductShape } from "../../data/data";

type CartItemProps = {
  products: ProductShape;
};

const CartItem = ({ products }: CartItemProps) => {
  return (
    <div>
      <h2 className="font-bold">{products.name}</h2>
    </div>
  );
};

export default CartItem;

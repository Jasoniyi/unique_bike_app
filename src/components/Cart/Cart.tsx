import React from "react";
import { useCartStore } from "../../store/useCartStore";
import CartItem from "./CartItem";
import { ProductShape } from "../../data/data";

const Cart = () => {
  // Get the cart status using the hook useCartStore,
  // which gives us access to the cart status of the store.
  const cart = useCartStore((state) => state.cart);

  // Calculate the total price of the products in the cart by
  // adding the prices of each product multiplied by its quantity.
  const total = cart.reduce(
    (acc, pdct) => acc + pdct.price * (pdct.quantity as number),
    0
  );

  console.log(cart, "cart");

  return (
    <div className="px-4">
      <h1 className="">Cart</h1>
      <section>
        <ul>
          {cart.map((product: ProductShape) => (
            <CartItem key={product.id} products={product} />
          ))}
        </ul>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">Total:</span>
          <span className="text-xl font-bold">${total.toFixed(2)}</span>
        </div>
      </section>
    </div>
  );
};

export default Cart;

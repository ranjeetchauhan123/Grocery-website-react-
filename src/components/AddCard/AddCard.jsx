import { useSelector, useDispatch } from "react-redux";
import {  removeFromCart,  clearCart,  increaseQty,  decreaseQty,} from "../../redux/cartSlice";
import Button from '../Button/Button'
import { useState } from "react";
import OrderForm from "../OrderForm/OrderForm"

function AddCart() {
  const dispatch = useDispatch();
  const [orderForm , setOrderForm] = useState(false)

  const cartItems = useSelector((state) => state.cart.cartItems);

  // Total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-30 py-15 text-xl">
        Your cart is empty 🛒
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Cart</h2>

        <button
          onClick={() => dispatch(clearCart())}
          className="px-4 py-2 bg-red-500 text-white rounded
          hover:bg-red-600 transition"
        >
          Clear All
        </button>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="
            flex flex-col sm:flex-row justify-between items-center
            gap-4 border p-4 rounded-lg bg-white shadow-sm
          "
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain"
              />

              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-600">
                  ₹{item.price}
                </p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  dispatch(decreaseQty(item.id))
                }
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                −
              </button>

              <span className="font-semibold">
                {item.qty}
              </span>

              <button
                onClick={() =>
                  dispatch(increaseQty(item.id))
                }
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                +
              </button>
            </div>

            {/* Price + Remove */}
            <div className="text-right">
              <p className="font-bold">
                ₹{(item.price * item.qty).toFixed(2)}
              </p>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
                className="text-red-500 text-sm hover:underline mt-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h3 className="text-xl font-semibold">
          Total: ₹{totalAmount.toFixed(2)}
        </h3>
        <div onClick={() => setOrderForm(!orderForm)}>
          <Button content="Place Order" />
        </div>
        <OrderForm orderForm={orderForm} setOrderForm={setOrderForm} />
        
      </div>
    </div>
  );
}

export default AddCart;
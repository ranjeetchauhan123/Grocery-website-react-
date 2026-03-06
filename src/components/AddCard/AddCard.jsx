import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, increaseQty, decreaseQty,} from "../../redux/cartSlice";
import Button from "../Button/Button";
import { useState } from "react";
import OrderForm from "../OrderForm/OrderForm";

function AddCart() {
  const dispatch = useDispatch();
  const [orderForm, setOrderForm] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center pt-32 text-gray-500">
        <h2 className="text-2xl font-semibold mb-2">
          Your Cart is Empty 🛒
        </h2>
        <p className="text-gray-400">
          Looks like you haven't added anything yet
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 pt-28 pb-16">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          My Cart
        </h2>

        <button onClick={() => dispatch(clearCart())}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-sm" >
          Clear All
        </button>
      </div>

      {/* Cart Items */}
      <div className="space-y-5">
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center gap-4 border p-4 
          rounded-xl bg-white shadow-sm hover:shadow-lg transition " >
            {/* Left */}
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name}  className="w-20 h-20 object-contain" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  {item.name}
                </h4>
                <p className="text-orange-500 font-medium">
                  ₹{item.price}
                </p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="w-8 h-8 flex items-center justify-center border rounded-lg hover:bg-gray-100 transition" > -
              </button>
              <span className="font-semibold text-lg">
                {item.qty}
              </span>

              <button onClick={() => dispatch(increaseQty(item.id))}
                className="w-8 h-8 flex items-center justify-center border rounded-lg
                hover:bg-gray-100 transition">
                +
              </button>
            </div>

            {/* Price + Remove */}
            <div className="text-right">
              <p className="font-bold text-lg text-gray-800">
                ₹{(item.price * item.qty).toFixed(2)}
              </p>

              <button onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 text-sm hover:underline mt-1" >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div
        className="mt-10 border-t pt-6 flex flex-col sm:flex-row
        justify-between items-center gap-4" >
        <h3 className="text-xl font-semibold text-gray-800">
          Total: <span className="text-orange-500">₹{totalAmount.toFixed(2)}</span>
        </h3>

        <div onClick={() => setOrderForm(!orderForm)}>
          <Button content="Place Order" />
        </div>

        <OrderForm orderForm={orderForm} setOrderForm={setOrderForm} allPrice={totalAmount}  />
      </div>
    </div>
  );
}

export default AddCart;
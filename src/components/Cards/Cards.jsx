import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourite, removeFromFavourite } from "../../redux/favouriteSlice";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { useState } from "react";
import OrderForm from "../OrderForm/OrderForm";

function Cards({ images, name, price }) {
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [orderForm, setOrderForm] = useState(false);
  const [allPrice, setAllPrice] = useState();

  const product = {
    id: Date.now(),
    image: images,
    name,
    price,
  };

  return (
    <>
      <OrderForm
        orderForm={orderForm}
        setOrderForm={setOrderForm}
        allPrice={allPrice}
      />

      <div className="group bg-white border border-gray-200 p-4 sm:p-5 rounded-xl transition-all duration-300
          hover:scale-105 hover:shadow-xl hover:border-green-400">

        {/* Icons */}
        <div className="flex justify-between items-center">
          {/* Favourite */}
          {isFav ? (
            <span
              onClick={() => {
                dispatch(removeFromFavourite(product.id));
                setIsFav(false);
              }}
              className="text-2xl sm:text-3xl cursor-pointer text-red-500 transition transform hover:scale-110" >
              <FaHeart />
            </span>
          ) : (
            <span
              onClick={() => {
                dispatch(addToFavourite(product));
                setIsFav(true);
              }}
              className="text-2xl sm:text-3xl cursor-pointer text-gray-400 hover:text-red-500 transition transform hover:scale-110" >
              <FaHeart />
            </span>
          )}

          {/* Add to Cart */}
          {isCart ? (
            <button
              onClick={() => {
                dispatch(removeFromCart(product.id));
                setIsCart(false);
              }}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white text-lg sm:text-xl px-3 py-2 rounded-lg 
              hover:scale-105 transition" >
              <FaPlus />
            </button>
          ) : (
            <button
              onClick={() => { dispatch(addToCart(product));
                setIsCart(true);
              }}
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-lg sm:text-xl px-3 py-2 rounded-lg 
              hover:scale-105 transition" >
              <FaPlus />
            </button>
          )}
        </div>

        {/* Image */}
        <div className="w-full h-40 sm:h-48 mt-4 overflow-hidden">
          <img src={images}  alt={name}
            className="w-full h-full object-contain transition duration-300 group-hover:scale-110" />
        </div>

        {/* Content */}
        <div className="text-center mt-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            {name}
          </h3>

          <p className="text-xl sm:text-2xl font-bold mt-2 text-orange-500">
            ₹{price.toFixed(2)}
          </p>

          <div
            className="mt-4" onClick={() => {
              setOrderForm(!orderForm);
              setAllPrice(price);
            }} >
            <Button content="Shop Now" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
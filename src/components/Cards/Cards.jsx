import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToFavourite, removeFromFavourite } from "../../redux/favouriteSlice";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { useState } from "react"
import OrderForm from "../OrderForm/OrderForm"

function Cards({ images, name, price }) {
  const dispatch = useDispatch();


  const [isFav, setIsFav] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [orderForm , setOrderForm] = useState(false)

  const product = {
    id: Date.now(),
    image: images,
    name,
    price,
  };


  return (
    <>
      <OrderForm orderForm={orderForm} setOrderForm={setOrderForm} />

    <div className="bg-white border p-4 sm:p-5 rounded-xl transition-all duration-300 hover:border-green-500 
      over:-translate-y-2 hover:shadow-lg" >        
      {/* Icons */}
      <div className="flex justify-between">
        {/* Favourite */}
        {isFav ? (
          <span
            onClick={() => {
              dispatch(removeFromFavourite(product.id));
              setIsFav(false)
            }}
            className="text-2xl sm:text-3xl cursor-pointer text-red-500">
            <FaHeart />
          </span>
        ) : (
          <span onClick={() => {dispatch(addToFavourite(product));
              setIsFav(true); 
              delItem
            }}
            className="text-2xl sm:text-3xl cursor-pointer text-zinc-400">
            <FaHeart />
          </span>          
        )}

        {/* Add to Cart */}
        {
          isCart ? (
            <button onClick={() => {dispatch(removeFromCart(product.id));
                setIsCart(false);
              }}
              className="bg-gradient-to-b from-orange-400 to-green-500 text-white text-lg sm:text-xl px-3 py-2 rounded-lg">
              <FaPlus />
            </button>
          ) : (
            <button onClick={() => {dispatch(addToCart(product));
                setIsCart(true); 
              }}
              className="bg-gradient-to-b from-orange-400 to-orange-500 text-white text-lg sm:text-xl px-3 py-2 rounded-lg">
              <FaPlus />
            </button>
          )
        }
      </div>

      {/* Image */}
      <div className="w-full h-40 sm:h-48 mt-3">
        <img src={images} alt={name}
          className="w-full h-full object-contain" />
      </div>

      {/* Content */}
      <div className="text-center mt-3">
        <h3 className="text-lg sm:text-xl font-semibold">{name}</h3>
        <p className="text-xl sm:text-2xl font-bold mt-2">
          ₹{price.toFixed(2)}
        </p>
        <div onClick={() => setOrderForm(!orderForm)}>
          <Button content="Shop Now" />
        </div>
        
      </div>
    </div>
  </>
  );
}

export default Cards;

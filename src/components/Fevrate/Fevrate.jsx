import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaPlus } from "react-icons/fa";
import { removeFromFavourite } from "../../redux/favouriteSlice";
import { addToCart } from "../../redux/cartSlice";

const Favourite = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourite.items);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-5 py-20 mt-15">
      {favourites.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl p-4 shadow hover:shadow-lg transition "
        >
          {/* Icons */}
          <div className="flex justify-between mb-2">
            {/* Unlike */}
            <span
              onClick={() =>
                dispatch(removeFromFavourite(item.id))
              }
              className="text-red-500 text-xl cursor-pointer"
            >
              <FaHeart />
            </span>

            {/* Add to cart */}
            <span
              onClick={() => dispatch(addToCart(item))}
              className="text-orange-500 text-xl cursor-pointer"
            >
              <FaPlus />
            </span>
          </div>

          {/* Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-contain mb-3"
          />

          {/* Info */}
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="font-bold text-xl mt-1">
            ₹{item.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Favourite;

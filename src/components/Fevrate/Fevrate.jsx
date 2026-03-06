import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaPlus } from "react-icons/fa";
import { removeFromFavourite } from "../../redux/favouriteSlice";
import { addToCart } from "../../redux/cartSlice";

const Favourite = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourite.items);

  return (
    <div className="min-h-screen pt-24 px-5">

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
        Your Favourite Items
      </h1>

      {/* Empty State */}
      {favourites.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-gray-500 mt-20">
          <FaHeart className="text-5xl mb-4 text-gray-300" />
          <p className="text-lg">No favourite items yet</p>
          <p className="text-sm">Add products to your wishlist </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favourites.map((item) => (

            <div key={item.id}
              className="border rounded-xl p-4 shadow hover:shadow-xl transition bg-white" >
              {/* Icons */}
              <div className="flex justify-between mb-3">
                {/* Remove favourite */}
                <span
                  onClick={() => dispatch(removeFromFavourite(item.id))}
                  className="text-red-500 text-xl cursor-pointer hover:scale-110 transition">
                  <FaHeart />
                </span>

                {/* Add to cart */}
                <span onClick={() => dispatch(addToCart(item))}
                  className="text-orange-500 text-xl cursor-pointer hover:scale-110 transition" >
                  <FaPlus />
                </span>
              </div>

              {/* Image */}
              <img src={item.image} alt={item.name}
                className="w-full h-40 object-contain mb-4" />

              {/* Info */}
              <h3 className="font-semibold text-lg text-gray-700">
                {item.name}
              </h3>

              <p className="font-bold text-xl mt-1 text-orange-500">
                ₹{item.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourite;
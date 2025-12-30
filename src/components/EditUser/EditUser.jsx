import React from "react";
import { useState } from "react";

const EditUser = ({ newSlide, setShowSlide }) => {


  return (
  <div
    className={`fixed top-20 right-0
    w-[95%] sm:w-[80%] md:w-[45%] lg:w-[30%] xl:w-[25%]
    h-[85%] sm:h-[87%]
    rounded-2xl bg-white border border-orange-500
    shadow-xl p-4 sm:p-6 z-50
    transform transition-transform duration-500 ease-in-out
    ${newSlide ? "translate-x-0" : "translate-x-full"}`}
  >
    {/* Close button (left top) */}
    <button
      onClick={() => setShowSlide(false)}
      className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center
      rounded-full border hover:bg-red-100 text-red-500 font-bold"
    >
      ×
    </button>

    <div className="p-3 sm:p-5 mt-4">
      <h2 className="text-lg sm:text-xl font-semibold text-orange-500 mb-4 sm:mb-6">
        Edit User
      </h2>

      {/* input fields */}
      <div className="space-y-3 sm:space-y-4">
        <input
          type="text"
          placeholder="Update Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Update Profession"
          className="w-full border p-2 rounded"
        />

        <button
          className="w-full bg-orange-500 text-white py-2 rounded
          hover:bg-orange-600 transition"
        >
          Update
        </button>
      </div>
    </div>
  </div>
);

};

export default EditUser;

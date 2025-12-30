import React from "react";

const RegForm  = ({ setUserRegForm, setLoginOpen}) => {
  return (
    <>
    <h2 className="text-lg sm:text-xl font-semibold text-orange-500 mb-4 sm:mb-6 text-center">
            Users SignUp Form
          </h2>
      {/* Form */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2.5 rounded text-sm sm:text-base"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2.5 rounded text-sm sm:text-base"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2.5 rounded text-sm sm:text-base"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-2.5 rounded text-sm sm:text-base"
        />

        <button
          className="w-full bg-orange-500 text-white py-2.5 rounded
          hover:bg-orange-600 transition font-medium"
        >
          SignUp
        </button>
      </div>

      {/* Login link */}
      <p className="text-sm text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <span
          onClick={() => {
            setUserRegForm(false);
            setLoginOpen(true);
          }}
          className="text-orange-500 cursor-pointer hover:underline"
        >
          Login here
        </span>
      </p>
    </>
  );
};

export default RegForm;

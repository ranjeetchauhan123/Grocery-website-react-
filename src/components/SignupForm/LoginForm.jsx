import React from "react";

const LoginForm = ({ setLoginOpen, setUserRegForm}) => {
  return (
    <>
      <h2 className="text-lg sm:text-xl font-semibold text-orange-500 mb-4 sm:mb-6 text-center">
            Users SignIn Form
          </h2>
      {/* Form */}
      <div className="space-y-3 sm:space-y-4 py-5">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 p-2 sm:p-2.5 rounded
          focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border border-gray-300 p-2 sm:p-2.5 rounded
          focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <p className="text-right text-xs sm:text-sm text-orange-500 cursor-pointer hover:underline">
          Forgot password?
        </p>

        <button
          className="w-full bg-orange-500 text-white py-2 sm:py-2.5 rounded
          hover:bg-orange-600 transition font-medium text-sm sm:text-base"
        >
          SignIn
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-2 my-4 sm:my-5">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-xs sm:text-sm text-gray-400">OR</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Register link */}
      <p className="text-xs sm:text-sm text-center text-gray-600">
        Not registered?{" "}
        <span
          onClick={() => {
            setLoginOpen(false);
            setUserRegForm(true);
          }}
          className="text-orange-500 cursor-pointer"
        >
          Create an account
        </span>
      </p>
    </>
  );
};

export default LoginForm;

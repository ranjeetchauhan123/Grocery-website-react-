import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegForm from "../SignupForm/RegForm";

const SignInForm = ({ signupForm, setSignup }) => {
  if (!signupForm) return null;

  const [loginOpen, setLoginOpen] = useState(true);
  const [userRegForm, setUserRegForm] = useState(false);

  return (
    <>
      {/* Background overlay */}
      <div
        onClick={() => setSignup(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* Modal wrapper */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4">
        <div
          className="relative
          w-[95%] sm:w-[80%] md:w-[55%] lg:w-[35%] xl:w-[30%]
          rounded-2xl bg-white border border-orange-500
          shadow-2xl p-4 sm:p-6"
        >
          {/* Close button */}
          <button
            onClick={() => setSignup(false)}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center
            rounded-full border hover:bg-red-100 text-red-500 font-bold"
          >
            ×
          </button>

          {/* Forms */}
          {loginOpen && (
            <LoginForm setLoginOpen={setLoginOpen} setUserRegForm={setUserRegForm}/>
          )}

          {userRegForm && (
            <RegForm setUserRegForm={setUserRegForm} setLoginOpen={setLoginOpen}/>
          )}
        </div>
      </div>
    </>
  );
};

export default SignInForm;

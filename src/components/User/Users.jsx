import React, { useState} from "react";
import EditUser from "../EditUser/EditUser";
import Form from '../SignupForm/Form'
import Photo from "../../assets/photo.JPG"

const Users = ({ profile }) => {
  if (!profile) return null;

  const [showSlide, setShowSlide] = useState(false);
  const [signup, setSignup] = useState(false);
  const [image, setImage] = useState(Photo);

  // image change handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="absolute right-0 mt-110 w-56 rounded-xl overflow-hidden 
     bg-white mr-1 border border-orange-500">
      {/* profile section */}
      <div className="flex flex-col items-center gap-2 py-5 bg-white">
        <img
          src={image}
          alt="user"
          className="w-20 h-20 rounded-full ring-2 ring-white shadow-md object-cover"
        />
       

        {/* edit image option */}
        <label className="text-xs text-orange-500 cursor-pointer hover:underline">
          Edit Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>

        <div className="text-center">
          <p className="text-sm font-semibold text-gray-800">
            Ranjeet Chauhan
          </p>
          <p className="text-xs text-gray-500">
            Web Developer
          </p>
        </div>
      </div>

      <div className="h-px bg-gray-200" />

      <ul className="py-2 text-sm text-gray-700 text-[18px]">
        <li
          onClick={() => setShowSlide(true)}
          className="px-4 py-2.5 hover:bg-gray-100 hover:text-orange-500 cursor-pointer transition-all"
        >
          Edit Profile
        </li>

        <EditUser newSlide={showSlide} setShowSlide={setShowSlide} />
        

        <li className="px-4 py-2.5 hover:bg-gray-100 hover:text-orange-500 cursor-pointer transition-all"
        onClick={() => setSignup(true)}
        >
          Login
        </li>
        <Form signupForm={signup} setSignup={setSignup} />

        <li className="px-4 py-2.5 hover:bg-red-50 text-red-500 cursor-pointer transition-all">
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Users;

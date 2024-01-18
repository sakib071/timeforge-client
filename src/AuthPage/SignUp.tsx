import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiHome, FiUnlock, FiUser } from "react-icons/fi";
import { LuEye, LuEyeOff } from "react-icons/lu";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import BackgroundMotion from "../Components/BackgroundMotion/BackgroundMotion";
import { HiOutlineMail } from "react-icons/hi";
const SignUp = () => {
  interface FormEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement & {
      email: {
        value: string;
      };
      password: {
        value: string;
      };
    };
  }

  const [showPassword, setShowPassword] = useState(false);
  const [passwordLength, setPasswordLength] = useState(0);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordLength(e.target.value.length);
  };
  // handle signUp
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    toast.success(`Username:${username} Email:${email} password:${password}`);
  };
  // handle google signUp
  const handleGoogle = () => {
    toast.success("Google");
  };

  return (
    <div className="flex flex-col items-center overflow-hidden lg:flex-row lg:h-screen">
      <div className="p-4 lg:w-1/2 lg:p-8 ">
        <Link to="/">
          <FiHome
            className="absolute left-4 top-4 text-[#1C1C1C] text-lg cursor-pointer z-10"
            style={{ pointerEvents: "auto" }}
          />
        </Link>

        <MouseParallaxContainer
          className="smooth-parallax"
          globalFactorX={0.7}
          globalFactorY={0.7}
          resetOnLeave>
          <div className="flex flex-col items-center justify-center mb-6 pt-[72px]">
            <MouseParallaxChild factorX={0.7} factorY={0.8}>
              <img
                className="w-16 mb-7"
                src="./logo.png"
                alt="TimeForge Logo"
              />
            </MouseParallaxChild>
            <h1 className="text-3xl font-bold">REGISTER</h1>
            <p className="text-[#525252] my-2">
              How to get started with TimeForge?
            </p>
          </div>
        </MouseParallaxContainer>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleLogin}>
          <div className="relative mb-4">
            <FiUser className="absolute left-3 top-[14px] text-[#1C1C1C] text-lg" />
            <input
              autoComplete="off"
              className="bg-[#F0EDFFCC] pl-10 pr-12 py-4 rounded-2xl text-xs text-[#1C1C1C] lg:w-96 outline-[#5E47EF] transition-all duration-300 ease-in"
              type="text"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="relative mb-4">
            <HiOutlineMail className="absolute left-3 top-[14px] text-[#1C1C1C] text-lg" />
            <input
              autoComplete="off"
              className="bg-[#F0EDFFCC] pl-10 pr-12 py-4 rounded-2xl text-xs text-[#1C1C1C] lg:w-96 outline-[#5E47EF] transition-all duration-300 ease-in"
              type="text"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="relative">
            <FiUnlock className="absolute left-3 top-[14px] text-[#1C1C1C] text-lg" />
            <input
              className="bg-[#f0edffcc] pl-10 pr-12 py-4 rounded-2xl text-xs text-[#1C1C1C] lg:w-96 outline-[#5E47EF] transition-all duration-300 ease-in"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            {passwordLength > 0 && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-[#1C1C1C]">
                {showPassword ? <LuEyeOff /> : <LuEye />}
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-8 py-3 mt-8 font-bold text-white transition-transform transform rounded-md bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:scale-110">
            Signup Now
          </button>
        </form>
        <div className="flex flex-col items-center justify-center gap-3 my-8 lg:flex-row lg:justify-center">
          <hr className="w-24 h-[1px] bg-[#F0EDFF]" />
          <p className="text-[#525252]">or continue with</p>
          <hr className="w-24 h-[1px] bg-[#F0EDFF]" />
        </div>
        <div className="flex items-center justify-center">
          <div
            onClick={handleGoogle}
            className="flex items-center justify-center gap-2 p-4 transition duration-300 ease-in-out transform bg-white border cursor-pointer select-none rounded-2xl md:w-96 hover:scale-105 hover:shadow-lg">
            <FcGoogle className="w-8 h-8" />
            <p className="text-[#1C1C1C]">
              Sign up with <span className="font-bold">Google</span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-screen h-screen lg:w-1/2">
        <div className="absolute inset-0 overflow-hidden">
          <BackgroundMotion />
        </div>
        <div className="relative z-10 w-1/2 overflow-hidden">
          <img
            src="./Clock.png"
            alt="Clock Image"
            className="block mx-auto pointer-events-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

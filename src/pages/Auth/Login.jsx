import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { CiUnlock } from "react-icons/ci";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [pass, setPass] = useState(true);
  return (
    <div className="w-full max-w-xs mx-auto">
      <h1 className="text-bg2 text-4xl font-bold">Welcome Back</h1>
      <p>Login with ZapShift</p>
      <div className="mt-10 ">
        <form>
          <div className=" relative ">
            <div className="absolute top-9 left-2">
              <TfiEmail className="text-bg1" />
            </div>
            <label
              htmlFor="email"
              className="block text-gray-800 mb-1 font-semibold text-sm"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Eamil"
              name="email"
              className="px-9 py-2 w-full shadow-2xl bg-gray-300 outline-0  ring-inset ring-gray-500 focus:outline-1 outline-baseColor rounded-sm"
            />
          </div>
          <div className=" relative mt-4">
            <div className="absolute top-9 left-2">
              <CiUnlock className="text-bg1" />
            </div>
            <label
              htmlFor="email"
              className="block text-gray-800 mb-1 font-semibold text-sm"
            >
              Password
            </label>
            <input
              type={pass ? "password" : "text"}
              placeholder="******"
              name="email"
              className="px-9 py-2 w-full shadow-2xl bg-gray-300 outline-0  ring-inset ring-gray-500 focus:outline-1 outline-baseColor rounded-sm"
            />
            <div
              onClick={() => setPass(!pass)}
              className={`absolute top-9 right-2 cursor-pointer`}
            >
              {pass ? <GoEyeClosed /> : <RxEyeOpen />}
            </div>
            <div className="text-right text-xs font-bold mt-1">
              <Link>Forget your password</Link>
            </div>
          </div>

          <div className="">
            <button className="bg-baseColor w-full py-2 mt-5 cursor-pointer font-bold">
              Sign In
            </button>
          </div>
        </form>

        <div className="flex items-center my-5">
          <div className="w-full h-px bg-bg1"></div>
          <div className="mx-2">OR</div>
          <div className="w-full  h-px bg-bg1"></div>
        </div>

        <div>
          <button className="flex items-center justify-center gap-2 text-bg1 bg-gray-500 w-full py-2 mt-5 cursor-pointer font-bold">
            <FcGoogle /> Sign in with Google
          </button>
        </div>

        <div className="mt-3">
          <p>
            Don't have account ?{" "}
            <Link
              to={"/register"}
              className="text-red-500 font-bold capitalize underline underline-offset-4"
            >
              sign up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

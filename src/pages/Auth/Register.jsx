import { useEffect, useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { CiUnlock } from "react-icons/ci";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { MdDriveFileRenameOutline } from "react-icons/md";
import useAuth from "./../../hooks/useAuth";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
import { FaCamera, FaUpload, FaUser } from "react-icons/fa";

const Register = () => {
  const [pass, setPass] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);
  const { signUpNewUser, signUpOrSignInWithGoogle } = useAuth();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const watchPassword = useWatch({
    name: "password",
    control,
  });

  // console.log(watchPassword);

  const handleSignUpForm = (data) => {
    const { name, email, password, confirm_pass } = data;
    signUpNewUser(email, password)
      .then((res) => {
        toast.success("Successfully sign up");
        reset();
      })
      .catch((err) => {
        if (err?.code === "auth/email-already-in-use") {
          toast.error("This Email already exists.");
        } else {
          toast.error("Signup Failed ! Try again later");
        }
      });
  };
  const handleGoogleSignUp = () => {
    signUpOrSignInWithGoogle()
      .then(() => {
        toast.success("Sign Up successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);
  return (
    <div className="w-full max-w-xs mx-auto">
      <h1 className="text-bg2 text-4xl font-bold">Create an Account</h1>
      <p>Register with ZapShift</p>
      <div className="mt-10 ">
        <form onSubmit={handleSubmit(handleSignUpForm)}>
          <div className="flex flex-col items-center mb-2">
            <div className=" relative">
              <div className="w-32 h-32 rounded-full border-4 border-white shdow-xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                <div className="w-full h-full flex items-center justify-center">
                  {previewImage ? (
                    <img src={previewImage} alt="" />
                  ) : (
                    <FaUser className="text-gray-400 text-5xl" />
                  )}
                </div>
              </div>

              <div className=" absolute bottom-0 right-0 bg-linear-to-r from-blue-500 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center text-white">
                <FaCamera></FaCamera>
              </div>

              <input
                type="file"
                accept="image/*"
                {...register("photo")}
                onChange={(e) => {
                  register("photo").onChange(e);
                  const file = e.target.files[0];
                  if (file) {
                    setPreviewImage(URL.createObjectURL(file));
                  }
                }}
                className=" absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            <div className="flex gap-2 items-center">
              <FaUpload className="text-sm text-bg1"></FaUpload>
              <p className="text-sm font-bold">Upload image</p>
            </div>
          </div>
          <div className=" relative mb-2">
            <div className="absolute top-9 left-2">
              <MdDriveFileRenameOutline className="text-bg1" />
            </div>
            <label
              htmlFor="name"
              className="block text-gray-800 mb-1 font-semibold text-sm"
            >
              Your Name
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
                minLength: {
                  value: 12,
                  message: "Name can not less then 12 charchter",
                },
              })}
              type="text"
              placeholder="Your Name"
              name="name"
              className="px-9 py-2 w-full shadow-2xl bg-gray-300 outline-0  ring-inset ring-gray-500 focus:outline-1 outline-baseColor rounded-sm"
            />

            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
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
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Type your valid email",
                },
              })}
              type="email"
              placeholder="Eamil"
              className="px-9 py-2 w-full shadow-2xl bg-gray-300 outline-0  ring-inset ring-gray-500 focus:outline-1 outline-baseColor rounded-sm"
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className=" relative mt-4">
            <div className="absolute top-9 left-2">
              <CiUnlock className="text-bg1" />
            </div>
            <label className="block text-gray-800 mb-1 font-semibold text-sm">
              Password
            </label>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
                minLength: {
                  value: 6,
                  message: "Password Must be at least 6 charchter",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password contain a digit, a uppercase, a lowercase and a specia charchter",
                },
              })}
              type={pass ? "password" : "text"}
              placeholder="******"
              className="px-9 py-2 w-full shadow-2xl bg-gray-300 outline-0  ring-inset ring-gray-500 focus:outline-1 outline-baseColor rounded-sm"
            />
            {errors?.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
            <div
              onClick={() => setPass(!pass)}
              className={`absolute top-9 right-2 cursor-pointer`}
            >
              {pass ? <GoEyeClosed /> : <RxEyeOpen />}
            </div>
          </div>

          <div className=" relative mt-4">
            <div className="absolute top-9 left-2">
              <CiUnlock className="text-bg1" />
            </div>
            <label className="block text-gray-800 mb-1 font-semibold text-sm">
              Confirm Password
            </label>
            <input
              {...register("confirm_pass", {
                required: {
                  value: true,
                  message: "Confirm password is required",
                },
                validate: (value) => {
                  if (value === watchPassword) {
                    return true;
                  }
                  return "password does not match";
                },
              })}
              type={pass ? "password" : "text"}
              placeholder="******"
              className="px-9 py-2 w-full shadow-2xl bg-gray-300 outline-0  ring-inset ring-gray-500 focus:outline-1 outline-baseColor rounded-sm"
            />
            {errors.confirm_pass && (
              <span className="text-sm text-red-500">
                {errors.confirm_pass.message}
              </span>
            )}
            <div
              onClick={() => setPass(!pass)}
              className={`absolute top-9 right-2 cursor-pointer`}
            >
              {pass ? <GoEyeClosed /> : <RxEyeOpen />}
            </div>
          </div>

          <div className="">
            <button
              disabled={isSubmitting}
              className="bg-baseColor w-full py-2 mt-5 cursor-pointer font-bold"
            >
              {isSubmitting ? "Creating..." : "Sign Up"}
            </button>
          </div>
        </form>

        <div className="flex items-center my-5">
          <div className="w-full h-px bg-bg1"></div>
          <div className="mx-2">OR</div>
          <div className="w-full  h-px bg-bg1"></div>
        </div>

        <div>
          <button
            onClick={handleGoogleSignUp}
            className="flex items-center justify-center gap-2 text-bg1 bg-gray-500 w-full py-2 mt-5 cursor-pointer font-bold"
          >
            <FcGoogle /> Sign in with Google
          </button>
        </div>

        <div className="mt-3">
          <p>
            Already have account ?{" "}
            <Link
              to={"/login"}
              className="text-red-500 font-bold capitalize underline underline-offset-4"
            >
              sign in
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

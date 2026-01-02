import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { passwordReset } = useAuth();
  const { register, handleSubmit } = useForm();

  const handlePasswordReset = (data) => {
    passwordReset(data.email);
    toast.success("An password reset link already sent you email.");
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-bg2 mb-2">Forgot Password</h1>
      <p>Enter your email address and we’ll send you a reset link.</p>

      <div>
        <form onSubmit={handleSubmit(handlePasswordReset)}>
          <div className="mt-5">
            <p>Email</p>
          </div>
          <input
            type="email"
            {...register("email")}
            className="border border-gray-400 w-full px-2 py-2 mt-2 rounded-md"
            placeholder="Type your email"
            required
          />
          <button className="bg-baseColor block w-full py-2 rounded-md mt-2 cursor-pointer">
            Send
          </button>
          <div className="mt-5">
            <p>
              Remember your password ?{" "}
              <Link className="text-baseColor underline" to={"/login"}>
                login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

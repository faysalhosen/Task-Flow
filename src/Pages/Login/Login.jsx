import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
  const {setLoading} = useContext(AuthContext)
    const [error, setError] = useState("");
  const { singIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const toastId = toast.loading("Logging In....");
    setError("");
    // console.log(data);
    singIn(data.email, data.password)
      .then((result) => {
        toast.success('Logged In...', {id: toastId});
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        toast.error(error.message, {id: toastId})
      });
  };
  // google sign in
  const handelGoogleSignIn = () => {
    const toastId = toast.loading("Logging In....");
    googleSignIn()
      .then((result) => {
        console.log(result);
        toast.success('Logged In...', {id: toastId});
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          image:result?.user?.photoURL,
          role:'user',
          status:'Bronze'
        }
        axiosPublic.post('/users', userInfo)
        navigate("/");
        navigate('/')
      })
      .catch((error) => {
        console.log(error);

        setError(error.message);
        toast.error(error.message, {id: toastId});
      });
  };
  return (

        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65]">
      <div className="flex flex-col p-6 rounded-md sm:p-10  text-gray-100 max-w-[500px]">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-6xl font-bold">Login</h1>
          <p className=" text-[#2f2b2b] text-2xl font-semibold">Welcome to Task<span className=" text-gray-100">Forge</span></p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-xl">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0065ff] bg-gray-100 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-xl mb-2">
                  Password
                </label>
              </div>
              <input
                {...register("password", {
                  required: true,
                  minLength: 8,
                  pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                })}
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 mb-3 border rounded-md border-gray-100 focus:outline-[#0065ff] bg-gray-100 text-gray-900"
              />
              {errors.password?.type === "required" && (
                <span className=" text-gray-200">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className=" text-gray-200">
                  Password Must be at least 8 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className=" text-gray-200 ">
                  Password must contain at least 1 numeric character at least 1
                  lowercase letter at least 1 uppercase letter at least 1
                  special character
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-gray-100 w-full rounded-md py-3 text-slate-800"
            >
              Sign Up
            </button>
            <h1 className=" text-gray-200 mt-3">{error}</h1>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16   "></div>
          <p className="px-3 text-base   ">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16   "></div>
        </div>
        <div
          onClick={handelGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 shadow-lg shadow-red-500 border-rounded cursor-pointer glass rounded hover:bg-white hover:text-slate-800"
        >
          {/* <FcGoogle size={32} /> */}

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-xl text-center text-gray-700">
          Do not an account?{" "}
          <Link
            to="/register"
            className="hover:underline hover:text-gray-200 text-gray-100"
          >
            Register
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;

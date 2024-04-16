import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { googleLogin, githubLogin, signInUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast("Login successfully");
        navigate("/")
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.code);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast("Login successfully");
        navigate("/")
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        toast("Login successfully");
        navigate("/")
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <Helmet>
        <title>Login - IndusNet</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center lg:text-left w-[50%]">
          <img src="https://i.ibb.co/dfyvhrn/women-vector.jpg" alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-xl bg-base-100 rounded-none">
          <h1 className="text-4xl font-bold text-center mx-auto">Login now!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register("password")}
              />
              <label className="label">
                <a className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#4583A8] text-white font-bold text-lg">
                Login
              </button>
            </div>
            <p className="flex justify-between items-center">
              New here?
              <Link to="/register">
                <button className="btn btn-link">Create an account</button>
              </Link>
            </p>
          </form>
          <p className="text-center mx-auto font-semibold">Login with</p>
          <div className="flex gap-10 justify-around px-10 my-5">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-primary flex-1 "
            >
              Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn btn-outline btn-secondary flex-1"
            >
              Github
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

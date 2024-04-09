import { Link } from "react-router-dom";
import loginSvg from "/women vector.jpg";

const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center lg:text-left w-[50%]">
          <img src={loginSvg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-xl bg-base-100 rounded-none">
          <h1 className="text-4xl font-bold text-center mx-auto">Login now!</h1>
          <form className="card-body pb-3">
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
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
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
            <button className="btn btn-outline btn-primary flex-1 ">Google</button>
            <button className="btn btn-outline btn-secondary flex-1">Github</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

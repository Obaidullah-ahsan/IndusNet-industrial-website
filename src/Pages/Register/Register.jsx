import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center lg:text-left w-[50%]">
          <img src="https://i.ibb.co/gvH64MK/men-vector.jpg" alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-xl bg-base-100 rounded-none">
          <h1 className="text-4xl font-bold text-center mx-auto">Register now!</h1>
          <form className="card-body pb-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary font-bold text-lg">Register</button>
            </div>
            <p className="font-semibold">
              Already have an account? Please
              <Link to="/login">
                <button className="btn btn-link pl-1">Login</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

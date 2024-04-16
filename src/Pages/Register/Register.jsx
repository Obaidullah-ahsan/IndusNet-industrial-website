import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, setReload } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password, name, photourl } = data;

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return toast(
        "Password must have an Uppercase, Lowercase, Length must be 6 character"
      );
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: `${name}`,
          photoURL: `${photourl}`,
        })
          .then(() => {
            setReload(true);
          })
          .catch(() => {});
        console.log(result.user);
        toast("Register successfully");
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };
  const handleShowHide = () => {
    setToggle(!toggle);
  };
  return (
    <div className="hero min-h-screen">
      <Helmet>
        <title>Register - IndusNet</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center lg:text-left w-[50%]">
          <img src="https://i.ibb.co/gvH64MK/men-vector.jpg" alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-xl bg-base-100 rounded-none">
          <h1 className="text-4xl font-bold text-center mx-auto">
            Register now!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-3">
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
                {...register("name")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photourl"
                placeholder="Photo URL"
                className="input input-bordered"
                required
                {...register("photourl")}
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
                {...register("email")}
              />
            </div>
            <div className="form-control placeholder relative">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type={`${toggle ? "text" : "password"}`}
                name="password"
                placeholder="password"
                className="input input-bordered "
                required
                {...register("password")}
              />
              <p
                onClick={() => handleShowHide()}
                className="absolute right-3 top-[52px] hover:cursor-pointer"
              >
                {toggle ? <FaRegEye /> : <FaEyeSlash />}
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#4583A8] text-white font-bold text-lg">
                Register
              </button>
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
      <ToastContainer />
    </div>
  );
};

export default Register;

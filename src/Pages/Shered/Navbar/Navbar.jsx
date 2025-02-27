import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/support">Support</NavLink>
      </li>
      <li>
        <NavLink to="/updateprofile">Update Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 md:px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >{navLinks}</ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-bold">
          IndusNet
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {user ? (
        <div className="navbar-end flex gap-2">
          <div
            className="tooltip tooltip-bottom z-10"
            data-tip={user.displayName}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={`${user.photoURL}`}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="btn bg-[#587187] text-white font-bold text-base"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-end flex gap-2">
          <Link
            to="/login"
            className="btn bg-[#587187] text-white font-bold text-base"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

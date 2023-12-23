import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.displayName);
  const handelLogout = () => {
    logOut()
      .then((data) => console.log("Logout", data))
      .catch((error) => console.log(error));
  };
  return (
    <div
      style={{ zIndex: 10 }}
      className="drawer w-screen  bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] pb-2"
    >
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar px-4 lg:px-20">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                color="white"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 ">
            <Link to={"/"}>
              <h1 className=" text-3xl font-semibold text-[#2E1619]">
                Task<span className=" text-gray-100">Forge</span>
              </h1>
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="flex flex-row gap-5 items-center text-[#2d2d2d] font-semibold text-lg">
              <li className=" hover:text-gray-100 ">
                <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              {user && (
                <>
                  <li className="hover:text-gray-100 ">
                    <NavLink
                      to={"/about"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      About Us
                    </NavLink>
                  </li>

                  <li className="hover:text-gray-100 ">
                    <NavLink
                      to={"/contact"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </>
              )}
              {user ? (
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className=" hover:cursor-pointer avatar ">
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-[#FF7594] rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">Profile</a>
                    </li>
                    <li>
                      <a>{user?.displayName}</a>
                    </li>
                    <li>
                      <button onClick={handelLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <li className=" hover:text-gray-100">
                  <NavLink
                    to={"/login"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* Page content here
        Content */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-60 min-h-full bg-[#FF7C65] text-gray-100">
          {/* Sidebar content here */}
          <li className=" hover:text-gray-100 ">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          {user && (
            <>
              <li className="hover:text-gray-100 ">
                <NavLink
                  to={"/about"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li className="hover:text-gray-100 ">
                <NavLink
                  to={"/contact"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </>
          )}
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar bg-[#5737FB] "
              >
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-[#5737FB] rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <button onClick={handelLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <li className=" hover:text-gray-100">
              <NavLink
                to={"/login"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import logooo from "../assets/logooo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constant";

const Asu = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">

        <div className="flex justify-between items-center">
          {/* LOGO */}
          <a href="/" className="flex items-center flex-shrink-0 rounded-full cursor-pointer ">
            <img className="h-15 w-15" src={logooo} alt="Logo" />
            <span className="text-2xl tracking-tight">
              Show
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Casely
              </span>
            </span>
          </a>

          {/* ITEMNAVBAR YANG DIAMBIL DARI CONSTANTS */}
          <ul className="hidden lg:flex ml-14 space-x-12  text-xl text-white ">
            {navItems.map((item, index) => (
              <li key={index} className="hover:-translate-y-1 ">
                <a href={item.href} className="hover:transition border-b-4 border-transparent hover:border-white rounded-xl py-2 px-3"> {item.label}</a>
              </li>
            ))}
          </ul>

          {/* LOGIN REGISTER */}
          <div className="hidden lg:flex justify-center space-x-12 items-center text-xl ">
            <a href="#" className="py-2 px-3 border rounded-md hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,204,0,0.4)]">
              Login
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,204,0,0.4)]"
            >
              Sign Up
            </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end ">
            <button onClick={toggleNavbar} className="bg-orange-500 hover:bg-blue-600 text-white p-2 rounded">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>

        </div>

        {/* {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )} */}

      </div>
    </nav>
  );

}

export default Asu
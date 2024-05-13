import React from "react";
import PropTypes from "prop-types";

const routes = [
  { name: "Home", href: "/", isActive: true },
  { name: "choode user", href: "/chooseuser", isActive: false },
  { name: "Why us?", href: "#", isActive: false },
  { name: "How It Works", href: "#", isActive: false },
  { name: "Features", href: "#", isActive: false },
  { name: "Testimonials", href: "#", isActive: false },
];

const NavMenu = ({ routes }) => (
  <ul
    className="flex flex-col lg:flex-row justify-center items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent"
    id="navbar"
  >
    {routes.map((route, i) => (
      <li key={i}>
        <a
          className={`px-4 ${
            route.isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
          }`}
          href={route.href}
        >
          {route.name}
        </a>
      </li>
    ))}
  </ul>
);

NavMenu.propTypes = {
  routes: PropTypes.array.isRequired,
};

const Navigation1 = () => {
  return (
    <div className="ezy__nav1 light py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative">
      <nav>
        <div className="container px-4">
          <div className="flex justify-between items-center">
            <a className="font-black text-3xl" href="#!">
              {" "}
              SMS - School Management System{" "}
            </a>
            <button
              className="block lg:hidden cursor-pointer h-10 z-20"
              type="button"
              id="hamburger"
            >
              <div className="h-0.5 w-7 bg-black dark:bg-white -translate-y-2" />
              <div className="h-0.5 w-7 bg-black dark:bg-white" />
              <div className="h-0.5 w-7 bg-black dark:bg-white translate-y-2" />
            </button>
            <NavMenu routes={routes} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation1;

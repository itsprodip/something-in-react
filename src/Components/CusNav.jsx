import { Menu } from "lucide-react";
import React from "react";

const CusNav = () => {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Blogs",
      path: "/blogs",
    },
    {
      id: 3,
      name: "About",
      path: "/about",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 5,
      name: "Profile",
      path: "/profile",
    },
  ];

  return (
    <nav className="flex justify-between px-4 py-3">
     <Menu/>
      <h3>My blog</h3>
      <ul className="flex">
        {navLinks.map((link) => (
          <li key={link.id} className="mr-10">
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
      {/* <ul className='flex'>
                <li className='mr-10'><a href="/home">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}
      <button className="btn">Sign in</button>
    </nav>
  );
};

export default CusNav;

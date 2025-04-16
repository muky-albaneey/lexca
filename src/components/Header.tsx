"use client"; // Mark as a client component

import { usePathname } from "next/navigation";
import Navbar from "./header/Navbar";


const Header = () => {
  const pathname = usePathname();

  // Define routes where the header should appear
  const showHeaderOnRoutes = ["/","/about","/affiliate","/blog","/cart","/checkout","/product","/seller/[id]","/all_category/[id]","/blog_detail/[id]","/category/[id]","/product_detail/[id]","/user_dashboard/[id]","/user_profile/[id]"];

  const shouldShowHeader =
  showHeaderOnRoutes.some((route) =>
    route.includes("[id]")
      ? new RegExp(`^${route.replace("[id]", "[^/]+")}$`).test(pathname)
      : pathname === route
  );


  if (!shouldShowHeader) return null;

  return <Navbar />;
};

export default Header;

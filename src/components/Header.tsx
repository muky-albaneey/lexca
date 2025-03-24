"use client"; // Mark as a client component

import { usePathname } from "next/navigation";
import Navbar from "./header/Navbar";


const Header = () => {
  const pathname = usePathname();

  // Define routes where the header should appear
  const showHeaderOnRoutes = ["/"];

  const shouldShowHeader = showHeaderOnRoutes.some((route) =>
    route.includes("[id]")
      ? new RegExp(`^${route.replace("[id]", "[^/]+")}$`).test(pathname)
      : pathname.startsWith(route)
  );

  if (!shouldShowHeader) return null;

  return <Navbar />;
};

export default Header;

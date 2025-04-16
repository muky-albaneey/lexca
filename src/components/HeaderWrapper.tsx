"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const showHeaderOnRoutes = ["/","/about","/affiliate","/blog","/cart","/checkout","/product","/seller/[id]","/all_category/[id]","/blog_detail/[id]","/category/[id]","/product_detail/[id]","/user_dashboard/[id]","/user_profile/[id]"];
export default function HeaderWrapper() {
  const pathname = usePathname();

  // Match dynamic routes using regex or startsWith
  const shouldShowHeader = showHeaderOnRoutes.some((route) =>
    route.includes("[id]")
      ? new RegExp(`^${route.replace("[id]", "[^/]+")}$`).test(pathname)
      : pathname === route
  );
  

  if (!shouldShowHeader) return null;

  return <Header />;
}

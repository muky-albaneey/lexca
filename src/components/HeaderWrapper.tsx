"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const showHeaderOnRoutes = ["/","/seller/[id]"];
export default function HeaderWrapper() {
  const pathname = usePathname();

  // Match dynamic routes using regex or startsWith
  const shouldShowHeader =
    showHeaderOnRoutes.some((route) =>
      route.includes("[id]")
        ? new RegExp(`^${route.replace("[id]", "[^/]+")}$`).test(pathname)
        : pathname.startsWith(route)
    );

  if (!shouldShowHeader) return null;

  return <Header />;
}

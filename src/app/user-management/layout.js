import React from "react";
import Navbar from "@/components/user-management/Navbar";
export default function UsermanagementLayout({ children }) {
  return <> 
  <Navbar/>
  {children}</>;
}

"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-secondary text-white"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>آرین کنترل</NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 text-white"
        justify="center"
      >
        <NavbarItem>
          <Link className="text-white" href="/taskmanager">
            مدریت وظایف
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/service">
            سرویس
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

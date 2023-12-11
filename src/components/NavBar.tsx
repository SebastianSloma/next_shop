"use client"

import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { Image } from '@nextui-org/react';


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Products",
    "Hot Offers",
    "Testimonials",
    "Contact",
    
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <Image src='/logo.png' alt='logo'width={20} height={20}/>
        <p className='text-lg text-gray-200'>
					Watch 
					<span className='class="font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600'>
						Shop
					</span>
				</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
       
        <NavbarItem>
          <Link color="foreground" href="#" underline="focus">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color='foreground' href="#" underline="focus">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" underline="focus">
            New Offers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" underline="focus">
            Testimonials
          </Link>
        </NavbarItem>
        <NavbarItem> 
          <Link color="foreground" href="#" underline="focus">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" color="foreground">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="default" href="#" variant="ghost">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
               "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

'use client';

import React from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenuItem,
	NavbarMenu,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	Input,
	Image,
} from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	interface MenuItem {
		label: string;
		href: string;
	  }
	  
	const menuItems: MenuItem[] = [
		{label: 'Home', href:'/'},
		{label: 'Products', href:'#products'},
		{label: 'New Offers', href:'#newoffer'},
		{label: 'Testimonials', href:'#testimonials'},
		{label: 'Contact', href:'#contact'},
	
	];

	return (
		<Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent className='sm:hidden' justify='start'>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				/>
			</NavbarContent>

			<NavbarContent className='sm:hidden pr-3 ' justify='center'>
				<NavbarBrand>
					<Image src='/logo.png' alt='logo' width={20} height={20} />
					<p className='text-lg  '  >
						Watch
						<span className='class="font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600'>
							Shop
						</span>
					</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				<NavbarItem>
					<Link color='foreground' href='#' className='font-semibold'>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#products' className='font-semibold'>
						Products
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#newoffer' className='font-semibold'>
						New Offers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#testimonials' className='font-semibold'>
						Testimonials
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#contact' className='font-semibold'>
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify='end'>
			
				<NavbarItem className='hidden lg:flex'>
					<ThemeSwitcher />

					<Button as={Link} color='warning' href='#' variant='faded' className='shadow-md'>
						Log in
					</Button>
				</NavbarItem>
				<NavbarItem className='hidden lg:flex'>
					<Button as={Link} color='warning' href='#' variant='ghost' className='shadow-md'>
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link className='w-full' color={'foreground'} href={item.href} size='lg'>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
				<NavbarItem>
					<Input
						classNames={{
							base: 'max-w-full sm:max-w-[10rem] h-10',
							mainWrapper: 'h-full',
							input: 'text-small',
							inputWrapper:
								'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
						}}
						placeholder='Type to search...'
						size='sm'
						type='search'
					/>
				</NavbarItem>

				<NavbarItem className='sm:flex mt-3'>
					<Button
						as={Link}
						color='warning'
						href='#'
						variant='faded'
						className='mr-5'>
						Log in
					</Button>
					<Button as={Link} color='warning' href='#' variant='ghost'>
						Sign Up
					</Button>
				</NavbarItem>
				<NavbarItem className='sm:flex mt-5'>
					<ThemeSwitcher />
				</NavbarItem>
			</NavbarMenu>
		</Navbar>
	);
}

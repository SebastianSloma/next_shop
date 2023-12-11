import React from 'react';
import { Image, Link, Input, Badge } from '@nextui-org/react';

import { BiUser } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const MainHeader = () => {
	return (
		<div className='border-b border-gray-200 py-6 max-sm:hidden'>
			<div className='container sm:flex justify-between items-center '>
				<Link className=' pb-2 sm:pb-0'>
					<Image
						width={90}
						height={90}
						alt='Logo'
						src='logo.png'
						className='max-sm:hidden'
					/>
				<p className='text-2xl text-gray-200'>
					Watch <br />
					<span className='class="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600'>
						Shop
					</span>
				</p>
				</Link>
				<div className='w-full sm:w-[300px] md:w-[70%] relative mx-10'>
					<div className='flex w-full flex-wrap md:flex-nowrap gap-4 max-sm:hidden'>
						<Input
							type='search'
							label='Type to search...'
							size='md'
							variant='bordered'
						/>
					</div>
				</div>

				<div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
					<BiUser className='hover:text-gray-200' />
					<Badge content='3' color='warning' variant='faded'>
						<FiHeart className='hover:text-gray-200' />
					</Badge>
					<Badge content='5' color='warning'>
						<HiOutlineShoppingBag className='hover:text-gray-200' />
					</Badge>
				</div>
			</div>
		</div>
	);
};

export default MainHeader;

import React from 'react';
import { Image, Link, Input, Badge } from '@nextui-org/react';

import { BiUser } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const MainHeader = () => {
	return (
		<div className='border-b border-gray-200 py-6'>
			<div className='container sm:flex justify-between items-center'>
				<Link className=' pb-2 sm:pb-0'>
					<Image
						width={90}
						height={90}
						alt='Logo'
						src='logo.png'
						className='max-sm:w-[40px]'
					/>
				</Link>
				<div className='w-full sm:w-[300px] md:w-[70%] relative'>
					<div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
						<Input
							type='search'
							label='Search'
							placeholder='Enter any product name...'
							size='md'
							variant='bordered'
						/>
					</div>
				</div>

				<div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
					<BiUser />
					<Badge content='3' color='danger' variant='faded'>
						<FiHeart />
					</Badge>
					<Badge content='5' color='danger'>
						<HiOutlineShoppingBag />
					</Badge>
				</div>
			</div>
		</div>
	);
};

export default MainHeader;

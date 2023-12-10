import React from 'react';
import ProductCard from './ProductCard';

const productsData = [
	{
		img: '/a1.png',
		title: 'Sport',
		desc: 'Black Smart Watch Raptor',
		rating: 5,
		price: '245.00',
	},
	{
		img: '/a2.png',
		title: 'Elegance',
		desc: 'Lux Women Smart Watch',
		rating: 4,
		price: '255.00',
	},
	{
		img: '/a3.png',
		title: 'Regular',
		desc: 'White Stone Smart Watch',
		rating: 3,
		price: '125.00',
	},
	{
		img: '/a4.png',
		title: 'Normal',
		desc: 'Red Regular Smart Watch',
		rating: 4,
		price: '145.00',
	},
	{
		img: '/a5.png',
		title: 'Sport',
		desc: 'Black Raptor Pro',
		rating: 5,
		price: '350.00',
	},
	{
		img: '/a6.png',
		title: 'Normal',
		desc: 'Smart Watch Lemon',
		rating: 4,
		price: '150.00',
	},
	{
		img: '/a7.png',
		title: 'Elegance',
		desc: 'Men Lux Black Metal',
		rating: 5,
		price: '250.00',
	},
	{
		img: '/a8.png',
		title: 'Normal',
		desc: 'Orange Smart Watch',
		rating: 4,
		price: '250.00',
	},
	{
		img: '/a9.png',
		title: 'Sport',
		desc: 'Black Yellow Smart Watch',
		rating: 5,
		price: '250.00',
	},
	{
		img: '/a10.png',
		title: 'Sport',
		desc: 'Black Lemon Smart Watch',
		rating: 5,
		price: '250.00',
	},
	{
		img: '/a11.png',
		title: 'Regular',
		desc: 'Black Gold Smart Watch ',
		rating: 3,
		price: '120.00',
	},
	{
		img: '/a12.png',
		title: 'Sport',
		desc: 'White Venom Smart Watch',
		rating: 5,
		price: '260.00',
	},
];

const Products = () => {
	return (
		<div>
			<div className='container pt-16'>
				<h2 className='mb-8 font-medium text-8xl pb-4'>
				
					<span className='class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600'>
						Products
					</span>
				</h2>

				<div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
					{productsData.map((item, index) => (
						<ProductCard
							key={index}
							img={item.img}
							title={item.title}
							desc={item.desc}
							price={item.price}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;

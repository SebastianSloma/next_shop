import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialData = [
	{
		pic: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		named: 'Zoey Lang',
		nick: '@zoeylang',
		opinion: 'Best watch ever',
        rating: 5,
		following: '245',
		followers: '50k',
	},

	{
		pic: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
		named: 'Zoey Lang',
		nick: '@zoeylang',
		opinion: 'Best watch ever',
        rating: 5,
		following: '245',
		followers: '50k',
	},

	{
		pic: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
		named: 'Zoey Lang',
		nick: '@zoeylang',
		opinion: 'Best watch ever',
        rating: 5,
		following: '245',
		followers: '50k',
	},

	{
		pic: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
		named: 'Zoey Lang',
		nick: '@zoeylang',
		opinion: 'Best watch ever',
        rating: 5,
		following: '245',
		followers: '50k',
	},

	{
		pic: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
		named: 'Zoey Lang',
		nick: '@zoeylang',
		opinion: 'Best watch ever',
        rating: 5,
		following: '245',
		followers: '50k',
	},

	{
		pic: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
		named: 'Zoey Lang',
		nick: '@zoeylang',
		opinion: 'Best watch ever',
        rating: 5,
		following: '245',
		followers: '50k',
	},
	{
		pic: 'https://i.pravatar.cc/300?u=a042581f4f29026707d',
		named: 'Zoey Lang',
		nick: '@zoeylang',
		opinion: 'Best watch ever',
        rating: 5,
		following: '245',
		followers: '50k',
	},
	{
		pic: 'https://i.pravatar.cc/300?u=a042581f4e29026710d',
		named: 'Zoey Lang',
		nick: '@zoeylang',
		opinion: 'Best watch ever',
        rating: 5,
		following: '245',
		followers: '50k',
	},
	{
		pic: 'https://i.pravatar.cc/300?u=a042581f4e29026712d',
		named: 'Zoey Lang',
		nick: '@zoeylang',
		opinion: 'Best watch ever',
        rating: 5,
		following: '245',
		followers: '50k',
	},
];

const Testimonials = () => {
	return (
		
			<div className='container pt-16'>
				<h2 className='mb-5 font-medium text-8xl pb-4'>
					Customer
					<br />
					<span className='class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500"'>
						Recommendations
					</span>
				</h2>

				<div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
					{testimonialData.map((item, index) => (
						<TestimonialCard
							key={index}
							pic={item.pic}
							named={item.named}
							nick={item.nick}
							opinion={item.opinion}
                            rating={item.rating}
							following={item.following}
							followers={item.followers}
						/>
					))}
				</div>
			</div>
		
	);
};

export default Testimonials;

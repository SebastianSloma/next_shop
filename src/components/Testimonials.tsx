import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialData = [
	{
		pic: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		named: 'Adam Wathan',
		nick: '@adamwathan',
		opinion: 'Nice quality product',
		rating: 4,
		following: '40k',
		followers: '600k',
	},

	{
		pic: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
		named: 'Greg Sullivan',
		nick: '@gregsullivang',
		opinion: 'Absolutely LOVE it ❤️',
		rating: 5,
		following: '1M',
		followers: '3M',
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
		pic: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
		named: 'Darren Westall',
		nick: '@darrenwestall',
		opinion: 'What time is it?',
		rating: 3,
		following: '33k',
		followers: '430k',
	},

	{
		pic: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
		named: 'Kenneth Cassel',
		nick: '@kennethcassel',
		opinion: '🔥🔥🔥',
		rating: 5,
		following: '300k',
		followers: '932k',
	},
	{
		pic: 'https://i.pravatar.cc/300?u=a042581f4f29026707d',
		named: 'Guillermo Rauch',
		nick: '@guillermorauch',
		opinion: 'Reloj muy bueno',
		rating: 5,
		following: '10k',
		followers: '180k',
	},
	{
		pic: 'https://i.pravatar.cc/300?u=a042581f4e29026710d',
		named: 'Sarah Dayan',
		nick: '@sarahdayan',
		opinion: 'Super helpful watch',
		rating: 5,
		following: '65k',
		followers: '450k',
	},
	{
		pic: 'https://i.pravatar.cc/300?u=a042581f4e29026712d',
		named: 'Madeleine Work',
		nick: '@madeleinework',
		opinion: 'I like it',
		rating: 4,
		following: '300k',
		followers: '2M',
	},
];

const Testimonials = () => {
	return (
		<div id='testimonials' className='container pt-16'>
			<h2 className='mb-10 font-medium text-8xl max-sm:text-5xl max-sm:text-center'>
				Customer <span className='class="font-extrabold text-transparent text-8xl max-sm:text-4xl bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600'>
					Reviews
				</span>
			</h2>

			<div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
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

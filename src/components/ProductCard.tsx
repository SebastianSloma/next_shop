import { Card, CardBody, CardFooter, Divider, Image } from '@nextui-org/react';

import React from 'react';



interface propsType {
	img: string;
	title: string;
	desc: string;

	price: string;
}

const ProductCard: React.FC<propsType> = ({
	img,
	title,
	desc,
	
	price,
}) => {


	return (
		<div className='px-4  max-w-[400px]  '>
			<Card shadow='sm' isPressable={true}>
				<CardBody className='overflow-visible p-0'>
					<Image
						width='100%'
						alt={title}
						className='w-full object-cover  h-[250px]'
						src={img}
					/>
					<div className='flex flex-col mb-2 pt-1'>
						<p className='text-md'>{desc}</p>
						<p className='text-small text-default-500'>{title}</p>
					</div>
				</CardBody>

				
				<Divider />
				<CardFooter className='text-small justify-center'>
					<div className='font-bold flex gap-4'>
						<p>${price}</p>
						<del className='text-gray-500 font-normal'>
							${parseInt(price) + 50}.00
						</del>
					</div>
				</CardFooter>
			</Card>
		</div>

	
	);
};

export default ProductCard;

import React from 'react';

import { Card, CardFooter, Image, CardBody, Divider } from '@nextui-org/react';

const NewOffer = () => {
	return (
		<div className='container pt-16 mb-5'>
			<h2 className='mb-8 font-medium text-8xl pb-4'>
				New
				<span className='class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600'>
					Offers
				</span>
			</h2>
			<div className='grid grid-cols-1 place-items-center max-sm:place-items-start sm:grid-cols-2 gap-10 '>
				<div className='px-4  max-w-[400px]  '>
					<Card shadow='sm' isPressable={true}>
						<CardBody className='overflow-visible p-0'>
							<Image
								width='100%'
								alt='smart'
								className='w-full object-cover h-[250px]'
								src='/a13.png'
							/>
							<div className='flex flex-col mb-2 pt-1'>
								<p className='text-md'>Descriptions</p>
								<p className='text-small text-default-500'>Water Proof</p>
							</div>
						</CardBody>

						<Divider />
						<CardFooter className='text-small justify-center'>
							<div className='font-bold flex gap-4'>
								<p>€400</p>
							</div>
						</CardFooter>
					</Card>
				</div>
				<div className='px-4  max-w-[400px]  '>
					<Card shadow='sm' isPressable={true}>
						<CardBody className='overflow-visible p-0'>
							<Image
								width='100%'
								alt='smart'
								className='w-full object-cover  h-[250px]'
								src='a14.png'
							/>
							<div className='flex flex-col mb-2 pt-1'>
								<p className='text-md'>Description</p>
								<p className='text-small text-default-500'>Water Proof</p>
							</div>
						</CardBody>

						<Divider />
						<CardFooter className='text-small justify-center'>
							<div className='font-bold flex gap-4'>
								<p>€400</p>
							</div>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default NewOffer;

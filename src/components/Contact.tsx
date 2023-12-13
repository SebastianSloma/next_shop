import React from 'react';

import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Input,
	Link,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Textarea,
	Image,
	Code,
} from '@nextui-org/react';

const Contact = () => {
	return (
		<div id='contact' className='container pt-16'>
			<h2 className='mb-8 font-medium text-8xl max-sm:text-6xl pb-4 max-sm:text-center'>
				Cont
				<span className='class="font-extrabold text-transparent text-8xl max-sm:text-6xl bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600'>
					act
				</span>
			</h2>
			<div className='grid grid-cols-1 place-items-center sm:place-items-center sm:grid-cols-2  gap-10 xl:gap-x-20 xl:gap-y-10'>
				{/* Contact Form */}
				<div className='w-full '>
					<div className='w-full mb-5'>
						<Input type='email' label='Email' variant='bordered' />
					</div>
					<div className='flex w-full flex-wrap sm:flex-nowrap gap-4 mb-5'>
						<Input type='email' label='First Name' variant='bordered' />
						<Input type='email' label='Last Name' variant='bordered' />
					</div>
					<div className='flex w-full gap-4'>
						<Textarea
							label='Message'
							placeholder='Type your message...'
							variant='bordered'
						/>
					</div>
					<div className='flex  gap-4 mt-5'>
						<Popover placement='right-end' showArrow={true}>
							<PopoverTrigger>
								<Button variant='faded' className='shadow-md'>
									Submit
								</Button>
							</PopoverTrigger>
							<PopoverContent>
								<div className='px-1 py-2'>
									<div className='text-small font-bold'>Message</div>
									<div className='text-tiny'>has been sent</div>
								</div>
							</PopoverContent>
						</Popover>
					</div>
				</div>
				{/* Card About */}
				<div>
					<Card className=''>
						<CardHeader className='flex gap-3'>
							<Image
								alt='nextui logo'
								height={40}
								radius='sm'
								src='/logo.png'
								width={40}
							/>
							<div className='flex flex-col'>
								<p className='text-md'>Watch Shop</p>
								<p className='text-small text-default-500'>watchshop.com</p>
							</div>
						</CardHeader>
						<Divider />
						<CardBody>
							<div className='max-w-md'>
								<div className='space-y-1'>
									<h4 className='text-medium font-medium'>
										The Best Smart Watches
									</h4>
									<p className='text-small text-default-400'>
										Next level adventure.
									</p>
								</div>
								<Divider className='my-4' />
								<div className='flex h-5 justify-center space-x-4 text-small mb-3'>
									<div>Regular</div>
									<Divider orientation='vertical' />
									<div>Normal</div>
									<Divider orientation='vertical' />
									<div>Elegance</div>
									<Divider orientation='vertical' />
									<div>Sport</div>
								</div>
							</div>

							<Divider />
							<p className='mt-3'>
								Make beautiful websites regardless of your design experience.
							</p>
						</CardBody>
						<Divider />
						<CardFooter>
							<Code>
								<Link
									color='warning'
									isExternal
									showAnchorIcon
									href='https://github.com/SebastianSloma/next_shop'>
									Visit source code on GitHub.
								</Link>
							</Code>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Contact;

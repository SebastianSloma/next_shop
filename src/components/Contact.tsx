import React from 'react';

import { Input, Textarea } from '@nextui-org/react';

const Contact = () => {
	return (
		<div id='contact' className='container pt-16'>
			<h2 className='mb-8 font-medium text-8xl pb-4'>
				Cont
				<span className='class="font-extrabold text-transparent text-8xl max-sm:text-6xl bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600'>
					act
				</span>
			</h2>
			<div className=' max-w-[500px] '>
				<div className='flex w-full  gap-4 mb-5'>
					<Input type='email' label='Email' />
				</div>
				<div className='flex w-full flex-wrap md:flex-nowrap gap-4 mb-5'>
					<Input type='email' label='First Name' />
					<Input type='email' label='Last Name' />
				</div>
				<div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
					<Textarea
						label='Message'
						placeholder='Type your message...'
						variant='faded'
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;

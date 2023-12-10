'use client';
import React from 'react';

import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Avatar,
	Button,
} from '@nextui-org/react';

interface propsType {
	pic: string;
	named: string;
	nick: string;
	opinion: string;
	following: string;
	followers: string;
}
const TestimonialCard: React.FC<propsType> = ({
pic,
named,
nick,
opinion,
following,
followers,
}) =>{

const [isFollowed, setIsFollowed] = React.useState(false);
    return (
		<div className='container pt-16 pb-6'>
			<Card className='max-w-[340px]'>
				<CardHeader className='justify-between'>
					<div className='flex gap-5'>
						<Avatar isBordered radius='full' size='md' src={pic} />
						<div className='flex flex-col gap-1 items-start justify-center'>
							<h4 className='text-small font-semibold leading-none text-default-600'>
								{named}
							</h4>
							<h5 className='text-small tracking-tight text-default-400'>
								{nick}
							</h5>
						</div>
					</div>
					<Button
						className={
							isFollowed
								? 'bg-transparent text-foreground border-default-200'
								: ''
						}
						color='primary'
						radius='full'
						size='sm'
						variant={isFollowed ? 'bordered' : 'solid'}
						onPress={() => setIsFollowed(!isFollowed)}>
						{isFollowed ? 'Unfollow' : 'Follow'}
					</Button>
				</CardHeader>
				<CardBody className='px-3 py-0 text-small text-default-400'>
					<p>
						{opinion}
					</p>
				</CardBody>
				<CardFooter className='gap-3'>
					<div className='flex gap-1'>
						<p className='font-semibold text-default-400 text-small'>4</p>
						<p className=' text-default-400 text-small'>{following}</p>
					</div>
					<div className='flex gap-1'>
						<p className='font-semibold text-default-400 text-small'>97.1K</p>
						<p className='text-default-400 text-small'>{followers}</p>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
                    }

export default TestimonialCard;

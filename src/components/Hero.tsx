'use client';

import * as React from 'react';
import { Image } from '@nextui-org/react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';


export default function App() {
	const [sliderRef] = useKeenSlider<HTMLDivElement>(
		{
			loop: true,
		},
		[
			slider => {
				let timeout: ReturnType<typeof setTimeout>;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 3000);
				}
				slider.on('created', () => {
					// slider.container.addEventListener('mouseover', () => {
					// 	mouseOver = true;
					// 	clearNextTimeout();
					// });
					slider.container.addEventListener('mouseout', () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on('dragStarted', clearNextTimeout);
				slider.on('animationEnded', nextTimeout);
				slider.on('updated', nextTimeout);
			},
		]
	);

	return (
		<div className=''>
			<div ref={sliderRef} className='keen-slider'>
				<div className='keen-slider__slide flex justify-center items-center '>
					<Image width={500} alt='NextUI hero Image' src='/a18.png' />
				</div>
				<div className='keen-slider__slide flex justify-center items-center'>
					<Image width={500} alt='NextUI hero Image' src='/a17.png' />
				</div>
				<div className='keen-slider__slide flex justify-center items-center'>
					<Image width={500} alt='NextUI hero Image' src='/a16.png' />
				</div>
				<div className='keen-slider__slide flex justify-center items-center'>
					<Image width={500} alt='NextUI hero Image' src='/a15.png' />
				</div>
			</div>
		</div>
	);
}
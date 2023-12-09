import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Image,
	Link,
} from '@nextui-org/react';
import { list } from 'postcss';
import React from 'react';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface propsType {
	img: string;
	title: string;
	desc: string;
	rating: number;
	price: string;
}

const ProductCard: React.FC<propsType> = ({
	img,
	title,
	desc,
	rating,
	price,
}) => {
	const generateRating = (rating: number) => {
		switch (rating) {
			case 1:
				return (
					<div className='flex gap-1 text-[20px] text-[#FF9529]'>
						<AiFillStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
					</div>
				);
			case 2:
				return (
					<div className='flex gap-1 text-[20px] text-[#FF9529]'>
						<AiFillStar />
						<AiFillStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
					</div>
				);
			case 3:
				return (
					<div className='flex gap-1 text-[20px] text-[#FF9529]'>
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiOutlineStar />
						<AiOutlineStar />
					</div>
				);
			case 4:
				return (
					<div className='flex gap-1 text-[20px] text-[#FF9529]'>
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiOutlineStar />
					</div>
				);
			case 5:
				return (
					<div className='flex gap-1 text-[20px] text-[#FF9529]'>
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
				);

			default:
				return null;
		}
	};

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
					<div className='flex flex-col mb-2'>
						<p className='text-md'>{desc}</p>
						<p className='text-small text-default-500'>{title}</p>
					</div>
				</CardBody>

				<Divider />
				<CardBody className='justify-center'>
                    <div>

					{generateRating(rating)}
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

		//     <div className="px-4 border border-gray-200 rounded-xl max-w-[400px] ">
		//       <div>
		//         <Image
		//           className="w-full h-[250px]"
		//           src={img}

		//           width={200}
		//           height={300}
		//           alt={title}
		//         />
		//       </div>

		//       <div className="space-y-2 py-2">
		//         <h2 className="text-accent font-medium uppercase">{title}</h2>
		//         <p className="text-gray-500 max-w-[150px]">{desc}</p>
		//         <div>{generateRating(rating)}</div>

		//         <div className="font-bold flex gap-4">
		//           ${price}
		//           <del className="text-gray-500 font-normal">
		//             ${parseInt(price) + 50}.00
		//           </del>
		//         </div>
		//       </div>
		//     </div>
		//   );
	);
};

export default ProductCard;

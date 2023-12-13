import { Button, Link } from '@nextui-org/react'
import React from 'react'
import { BsFacebook, BsTwitterX, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className=" text-gray-500 text-center py-6 pb-16 md:pb-4">
    Copyright © 

    <Link color='warning' isExternal href="https://github.com/SebastianSloma" >github.com/SebastianSloma</Link>

     <br /> All Rights Reserved 2023.

     <div className='hidden max-sm:flex justify-center gap-1 mt-3'>
						<Button
							isIconOnly
							color='default'
							variant='faded'
							className='text-[20px]'>
							<BsFacebook />
						</Button>
						<Button
							isIconOnly
							color='default'
							variant='faded'
							className='text-[20px]'>
							<BsTwitterX />
						</Button>
						<Button
							isIconOnly
							color='default'
							variant='faded'
							className='text-[20px]'>
							<BsInstagram />
						</Button>
						<Button
							isIconOnly
							color='default'
							variant='faded'
							className='text-[20px]'>
							<BsLinkedin />
						</Button>
					</div>
  </div>
  
  )
}

export default Footer
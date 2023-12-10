import { Link } from '@nextui-org/react'
import React from 'react'

const Footer = () => {
  return (
    <div className=" text-gray-500 text-center py-6 pb-16 md:pb-4">
    Copyright © 

    <Link color='warning' isExternal href="https://github.com/SebastianSloma" >github.com/SebastianSloma</Link>

     <br /> All Rights Reserved 2023.
  </div>
  )
}

export default Footer
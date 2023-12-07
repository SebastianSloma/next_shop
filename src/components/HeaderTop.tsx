import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            
              <BsFacebook />
            
            
              <BsTwitter />
           
           
              <BsInstagram />
            
          
              <BsLinkedin />
           
          </div>

          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - €100
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="EUR €">EUR €</option>
              <option value="USD $">USD $</option>
              
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French">Español</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
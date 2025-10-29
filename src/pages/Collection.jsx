import React, { useState,useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets'

const Collection = () => {

  const {products}=useContext(ShopContext)
  const [showFilter,setshowFilter]=useState(false)
  return (
    <div className='flex flex-col gap-1 sm:gap-10 pt-10 border-t '>
      {/* Filter options */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'onClick={()=>{setshowFilter(!showFilter)}}>Filters</p>
        <img className={`h-3 sm:hidden ${showFilter?'rotate-90':''} `}src={assets.dropdown_icon} alt="" />
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} />Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} />Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} />Kids
            </p>
          </div>
        </div>
        {/* SubcategoryFilter */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'':'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} />Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Middlewear'} />Middlewear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'WinterWear'} />WinterWear
            </p>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Collection

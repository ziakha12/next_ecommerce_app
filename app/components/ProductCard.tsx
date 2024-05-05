import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


interface cardProps {
  id?: number,
  title: string,
  image: string | any,
  price: number
  category: string
}

function ProductCard(props: cardProps) {
  return (
    <div className='product-card'>
      <div className='relative'>
        <Image src={props.image} alt='' className='w-full h-[400px]' />
        <div className="prodOpts px-2 py-2 hidden  group-hover:flex bg-[#1E2832]  justify-between items-center">
          <div className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faHeart}   className='text-white hover:text-red-500' />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white hover:text-red-500'  />
          </div>
          <button className='text-white hover:text-red-500'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            shop now
          </button>
        </div>
      </div>
      <h6 className='mt-[16px] text-[#1E2832] font-medium text-[17px]'>{props.title}</h6>
      <div className="flex justify-between items-center mt-[16px]">
        <p className='m-0 text-[#00000080]'>{props.category}</p>
        <span className='text-[#1E2832] font-medium text-[17px]'>${props.price}</span>
      </div>
    </div>
  )
}

export default ProductCard

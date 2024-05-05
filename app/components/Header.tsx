"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../public/Assets/images/logo.png'
import Image from 'next/image';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <header className='header px-[20px] pt-8 container mx-auto'>
            <div className='header-top pb-[30px] border-b-2 border-b-[#E3E3E3]  flex justify-between items-center'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='w-[20px] hidden lg:block' />
                <div className='logo'>
                    <Link href={"#"}>
                        <Image src={Logo} width={150} height={150} alt='' />
                    </Link>
                </div>
                <div className='hidden md:items-center md:gap-[23px] lg:flex'>
                    <div className='flex items-center gap-[8px] hover:text-red-500 cursor-pointer'>
                        <FontAwesomeIcon icon={faUser} />
                        <p className='text-[#1E2832] mb-0 hover:text-red-500 '>Account</p>
                    </div>
                    <div className='flex items-center gap-[8px] hover:text-red-500 cursor-pointer'>
                        <FontAwesomeIcon icon={faBagShopping} />
                        <p className='text-[#1E2832] mb-0 hover:text-red-500'>Shopping</p>
                    </div>
                </div>
                <button className='block lg:hidden' onClick={() => setMobileMenu(!mobileMenu)}>
                    <FontAwesomeIcon icon={faBars} className='text-[27px]' />
                </button>
            </div>
            {/* Desktop Nav */}
            <div className="pt-6 mx-auto justify-center hidden lg:flex">
                <nav>
                    <ul className="nav-items none p-0 md:justify-center lg:gap-[17px] xl:gap-[27px] 2xl:gap-[35px]  md:flex md:items-center">
                        <li className="nav-link">
                            <Link href={"#"} className='text-[#1E2832] hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]' >Jewelry & Accessories</Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"#"} className='text-[#1E2832]  hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]'>Clothing & Shoes</Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"#"} className='text-[#1E2832] hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]' >Home & Living</Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"#"} className='text-[#1E2832] hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]'>Wedding & Party</Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"#"} className='text-[#1E2832] hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]'>Toys & Entertainment</Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"#"} className='text-[#1E2832] hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]' >Art & Collectibles</Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"#"} className='text-[#1E2832]  hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]'>Craft Supplies & Tools</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Mobile Nav */}
            {
                mobileMenu && <div className={`bg-[#F4F4F5] backdrop-filter w-full px-2 h-[100vh] fixed top-0 z-[100]  transition ease-in-out delay-150 duration-300 ${mobileMenu ? 'transition-all duration-1000 -translate-x-[10px]' : '-translate-x-10'}`}>
                    <div className="">
                        <div className='flex justify-between border-b-2 border-b-[#E3E3E3] py-3'>
                            <Image className='filter' src={Logo} alt='' />
                            <button className='text-[#1E2832]' onClick={() => setMobileMenu(!mobileMenu)}> <FontAwesomeIcon icon={faXmark} className='text-[27px] text-[#1E2832]' /></button>
                        </div>
                        <nav className='border-b-2 border-b-[#E3E3E3] my-3'>
                            <ul className="nav-items flex items-center flex-col gap-4 justify-center">
                                <li className="nav-link">
                                    <Link href={"#"} className='text-[#1E2832] hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]' >Jewelry & Accessories</Link>
                                </li>
                                <li className="nav-link hover:border-b-2 hover:border-b-[#E3E3E3]">
                                    <Link href={"#"} className='text-[#1E2832]  hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]'>Clothing & Shoes</Link>
                                </li>
                                <li className="nav-link hover:border-b-2 hover:border-b-[#E3E3E3]">
                                    <Link href={"#"} className='text-[#1E2832] hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]' >Home & Living</Link>
                                </li>
                                <li className="nav-link hover:border-b-2 hover:border-b-[#E3E3E3]">
                                    <Link href={"#"} className='text-[#1E2832] hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]'>Wedding & Party</Link>
                                </li>
                                <li className="nav-link hover:border-b-2 hover:border-b-[#E3E3E3]">
                                    <Link href={"#"} className='text-[#1E2832] hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]'>Toys & Entertainment</Link>
                                </li>
                                <li className="nav-link hover:border-b-2 hover:border-b-[#E3E3E3]">
                                    <Link href={"#"} className='text-[#1E2832] hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]' >Art & Collectibles</Link>
                                </li>
                                <li className="nav-link  hover:border-b-2 hover:border-b-[#E3E3E3]">
                                    <Link href={"#"} className='text-[#1E2832]  hover:text-red-500 decoration-transparent font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[17px]'>Craft Supplies & Tools</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className='items-center justify-center mt-3  gap-[23px] flex flex-col'>
                            <div className='flex items-center gap-[8px] hover:text-red-500 cursor-pointer'>
                                <FontAwesomeIcon icon={faUser} className='text-[#1E2832]' />
                                <p className='text-[#1E2832] mb-0 hover:text-red-500 '>Account</p>
                            </div>
                            <div className='flex items-center gap-[8px] hover:text-red-500 cursor-pointer'>
                                <FontAwesomeIcon icon={faBagShopping} className='text-[#1E2832]' />
                                <p className='text-[#1E2832] mb-0 hover:text-red-500'>Shopping</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </header>
    )
}

export default Header

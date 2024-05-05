"use client"

import React, { useEffect, useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../components/ProductCard'
import { productCardData } from '../data'
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Products() {

    const [mobileMenu, setMobileMenu] = useState(false)

    const tabsItems = gql`
    query {
        tags(shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==") {
          nodes {
            name
            displayTitle
            slug
          }
        }
      } `;
    const { loading, error, data } = useQuery(tabsItems);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div className='container'>
            <section className='products-section relative my-[40px] mx-auto container'>
                <div className="products-opts flex justify-between">
                    {/* desktop tabs */}
                    <div className='btns-filter hidden lg:flex items-center gap-[30px]'>
                        <Link href={'/allProducts'} className='text-[#1E2832] text-[16px]'>All products</Link>
                        {
                            data.tags.nodes.map((menu: any) => (
                                <Link href={{query:{tag:menu.slug}}} className='text-[#1E2832] text-[16px] decoration-transparent' key={menu.name}>{menu.displayTitle}</Link>
                            ))
                        }
                    </div>
                    {/* Mobile tabs */}
                    <button className='block lg:hidden' onClick={(e) => setMobileMenu(!mobileMenu)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <PrimaryButton name='filter' iconItem={faFilter} />
                </div>
                {/* Mobile tab Wrapper */}
                {mobileMenu && <div className='bg-white shadow-lg absolute w-[250px] h-fit z-50 flex flex-col gap-1 p-2'>
                    <Link href={'/allProducts'} className='text-[#1E2832] decoration-transparent hover:text-red-500 text-[16px]'>All products</Link>
                    {
                        data.tags.nodes.map((menu: any) => (
                            <Link href={`/allProducts/${menu.slug}`} className='text-[#1E2832] hover:text-red-500 text-[16px] decoration-transparent' key={menu.name}>{menu.displayTitle}</Link>
                        ))
                    }
                </div>}
                <div className="flex flex-wrap  -m-4 mt-[40px] products-wrapper">
                    {
                        productCardData.map((cardData) => (
                            <div className="lg:w-1/4 md:w-1/2 px-2 w-full product mb-5 hover:shadow-2xl  hover:mt-[-10px] py-2 group transition-shadow duration-300 transition-delay-200 " key={cardData.id}>
                                <ProductCard {...cardData} />
                            </div>
                        ))
                    }
                </div>

            </section>

        </div>
    )


}
export default Products

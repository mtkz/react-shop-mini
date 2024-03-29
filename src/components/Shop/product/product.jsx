import React, { useContext, useReducer } from 'react'
import Image from "next/image";
import Link from 'next/link'

import CartContext from 'src/context/cartContext';
import CustomHead from '@components/client/header/customHead';
import ProductPrice from './productPrice';
import AlertContext from 'src/context/alertContext';
import Slider from '@components/client/slider/slider';

function itemNumberReducer(itemnumber, action) {
    switch (action.type) {
        case "INCREAMENT":
            return itemnumber += 1
        case "DECREAMENT":
            return itemnumber -= 1
        default:
            return itemnumber
    }


}

export default function Product({ product }) {
    const { setCart } = useContext(CartContext)
    const [itemnumber, ItemDispatch] = useReducer(itemNumberReducer, 1)
    const alert = useContext(AlertContext);

    const handleAddToCart = (product) => {
        setCart({ product, quantity: itemnumber, type: "add" })
        alert.success('به سبد خرید اضافه شد')
    }

    return (
        <>
            <CustomHead title={product.Name} />
            <div className='container'>
                <div className="pt-3 pb-12 border-b-[1px]">
                    <div className=" mx-auto mt-6 ">
                        <div className="flex  flex-col md:flex-row ">
                            <div className="w-1/3 ">
                                <div className="m-auto block w-3/4 bg-white">
                                    <Image
                                        className="w-full "
                                        src={product.Image}
                                        layout='responsive'
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                            <div className="px-4 w-1/3">
                                <h2 className="mb-2 leading-tight tracking-tight font-bold text-slate-500  text-xl border-b-[1px] pb-3">{product.Name}</h2>
                                <ul role="list" className="my-7">
                                    <li className="flex space-x-3">
                                        <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">  تعداد موجود : {product.Few}</span>
                                    </li>
                                </ul>

                            </div>
                            <div className="p-4 w-1/3 border-[1px]  rounded-md flex gap-3 justify-between flex-col bg-white">
                                <div className='w-full'>
                                    <div className='flex justify-between w-full border-b-[1px] border-slate-100 py-4'>
                                        <span className='font-yekan-bold text-slate-500 self-center'>قیمت</span>
                                        <ProductPrice lastBuyPrice={product.LastBuyPrice} sellPrice={product.SellPrice} />
                                    </div>
                                    <div className='flex justify-between w-full border-b-[1px] border-slate-100 py-4'>
                                        <span className='font-yekan-bold text-slate-500'>دسته بندی</span>
                                        <Link href={'/'}>
                                            <span className='w-24 text-center text-slate-400 text-sm'>
                                                <a>
                                                    {product.SideGroupName}
                                                </a>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex justify-between w-full gap-2 py-4 ">
                                    <div className='flex gap-3'>
                                        <button onClick={() => ItemDispatch({ type: "INCREAMENT" })} className="bg-gray-100 px-3 text-center h-10 self-center">
                                            +
                                        </button>
                                        <span className="self-center font-bold">
                                            <p className="text-center">
                                                {itemnumber}
                                            </p>
                                        </span>
                                        <button onClick={() => ItemDispatch({ type: "DECREAMENT" })} className="bg-gray-100 px-3 text-center h-10 self-center">
                                            -
                                        </button>
                                    </div>

                                    <button onClick={() => handleAddToCart(product)} type="button" className="text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md transition duration-150 ease-all text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-white ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-7 h-7" viewBox="0 0 512 512"><title>Cart</title><circle cx={176} cy={416} r={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={400} cy={416} r={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M48 80h64l48 272h256" /><path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                                        {/* TODO : prevent add to cart when product is out of stock  */}
                                        افزودن به سبد خرید
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="min-h-96  w-full">
                    <Slider label="محصولات مرتبط" category={product.MainGroupErpCode} count={15} />
                </div>
            </div>
        </>
    )
}

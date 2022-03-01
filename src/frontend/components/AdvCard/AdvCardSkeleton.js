import React from 'react'

// components
import PhotosCarousel from '../PhotosCarousel/PhotosCarousel'
import Card from "../UI/Card/Card";
import AdvAuthor from "./AdvAuthor";


const AdvCardSkeleton = (props) => {


    return (
        <Card className='flex-col md:flex-row overflow-hidden mb-6 shadow'>
            <div className='relative'>
                {/* PHOTOS */}
                <div
                    className='md:h-60 bg-gray-300 animate-pulse md:w-96 2xl:h-64 2xl:w-96'
                />
            </div>

            <div onClick={props.onClick} className='relative bg-white hover:bg-gray-50 transition cursor-pointer  p-4 flex-col flex flex-1'>
                {/* INFO-RIGHT */}
                <div className='flex justify-between'>
                    <div 
                        className='animate-pulse font-primary h-6 font-semibold bg-gray-300 w-20 rounded text-xl text-gray-700'
                    />
                   
                </div>

                <div className='block mt-2 bg-gray-300 w-32 h-7 rounded animate-pulse' />
                <div className='bg-gray-300 animate-pulse h-16 w-full rounded mt-2' />

                <div className='flex-1 flex justify-end items-end'>
                    <div className='text-4xl font-primary font-bold animate-pulse bg-gray-300 h-10 w-28 rounded' />
                </div>
            </div>
        </Card>
    )
}


export default AdvCardSkeleton;

import React from 'react'
import { RiMapPin2Line, RiStarFill } from 'react-icons/ri'

export type Tour = {
  id: string
  title: string
  city: string
  distance: number
  price: number
  maxGroupSize: number
  desc: string
  reviews: {
    name: string
    rating: number
  }[]
  // eslint-disable-next-line react/require-default-props
  avgRating?: number
  photo: string
  featured: boolean
}

const CardTour = ({ avgRating = 0, ...rest }: Tour) => {
  const countReview = rest.reviews.length
  return (
    <div className='rounded-lg shadow-xl'>
      {/* ========= Image ========== */}
      <div className='relative overflow-hidden rounded-t-lg'>
        <img src={rest.photo} alt={rest.desc} className=' hover:scale-110 duration-[200ms]' />
        {rest.featured && (
          <span className='absolute bottom-0 right-0 px-2 py-1 text-xs font-semibold bg-primary-color text-slate-100'>
            Featured
          </span>
        )}
      </div>

      {/* ========= Tour Info ========== */}
      <div className='p-2 mt-1 '>
        {/* ========= Top content ========== */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-1'>
            <RiMapPin2Line size='12px' color='#ff7e01' />
            <span className='text-xs font-semibold leading-4 text-black'>London</span>
          </div>

          <div className='flex items-center space-x-1'>
            <RiStarFill size='12px' color='#ff7e01' />
            {/* prettier-ignore */}
            <span className='text-[11px] font-light leading-4 text-slate-400'>
              {avgRating}
              {' '}
              (
              {' '}
              {countReview}
              {' '}
              )
            </span>
          </div>
        </div>

        {/* ========= middle tour title ========== */}
        <h3 className='mt-3 text-sm font-semibold h-[40px] '>{rest.title}</h3>

        {/* Bottom content */}
        <div className='flex items-center justify-between'>
          <div className='text-xs font-semibold text-slate-600'>
            <span className='text-[16px] font-bold text-primary-color'>{`$${rest.price}`}</span>
            &nbsp;/per person
          </div>

          <button
            type='button'
            className='px-2 py-1 text-xs font-semibold duration-150 hover:opacity-80 whitespace-nowrap woe rounded-xl bg-primary-color text-slate-100'
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardTour

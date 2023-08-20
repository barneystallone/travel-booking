import React from 'react'
import { CustomizationImage, GuideImage, WeatherImage } from '@/assets'

const servicesData = [
  {
    imgUrl: WeatherImage,
    title: 'Calculate Weather',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imgUrl: GuideImage,
    title: 'Best tour guide',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imgUrl: CustomizationImage,
    title: 'Customization',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className='service' key={index}>
          <div className='w-[36px] h-[36px] bg-primary-color rounded-full flex items-center justify-center'>
            <img src={item.imgUrl} alt={item.desc} className='w-4/5 p-[2px] h-4/5' />
          </div>
          <h3 className='font-semibold text-slate-950'>{item.title}</h3>
          <p className='text-xs font-semibold leading-4 text-slate-400'>{item.desc}</p>
        </div>
      ))}
    </>
  )
}

export default ServiceList

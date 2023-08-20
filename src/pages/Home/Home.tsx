/* eslint-disable jsx-a11y/media-has-caption */
import { HeroImages1, HeroImages2, HeroVideo, WorldImages } from '@/assets'
import SearchTour from './SearchTour'
import ServiceList from './ServiceList'
import tours from '@/assets/data/tours'
import CardList from './CardList'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='mt-8 md:mt-16 wrap'>
      {/* ======== Hero Section ============ */}
      <section className='flex flex-col justify-between px-1 space-y-6 md:space-x-5 md:space-y-0 md:flex-row'>
        {/* ======== Left side ====== */}
        <div className='md:basis-1/2'>
          {/* ====== button & icon =========== */}
          <div className='flex items-center space-x-2 overflow-hidden'>
            <h3 className='px-2 leading-7 rounded-full text-[24px] font-cursive bg-primary-color'>
              Know before you go
            </h3>
            <img src={WorldImages} alt='World' className='w-10 h-10 translate-y-[2px]' />
          </div>
          {/* ======= text ========= */}
          <h1 className='text-[24px] sm:text-[28px] my-4  mb-3 font-[600]'>
            Traveling opens the door to creating&nbsp;
            <span className='text-primary-color'>moments</span>
          </h1>
          <p className='text-sm leading-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellendus optio
            dignissimos illum temporibus, incidunt et vero tempora ad quaerat dolorum aut illo
            laboriosam possimus fuga, dolorem sed autem explicabo.
          </p>
        </div>

        {/* ======== Right side ====== */}
        <div className='flex-wrap  flex xs:flex-nowrap xs:space-x-3.5  md:basis-1/2 '>
          <div className='basis-1/2 xs:basis-1/3'>
            <img
              src={HeroImages1}
              alt='img1'
              className=' h-[200px]  ml-1 xs:h-[350px] object-cover rounded-xl md:order-1'
            />
          </div>
          <div className='order-3 basis-full xs:basis-1/3 md:order-1'>
            <video
              src={HeroVideo}
              controls
              className=' mt-4 xs:mt-0 xs:h-[350px] object-cover rounded-xl md:mt-4'
            />
          </div>
          <div className='basis-1/2 xs:basis-1/3 md:order-2'>
            <img
              src={HeroImages2}
              alt='img2'
              className=' h-[200px]   xs:h-[350px] object-cover rounded-xl md:mt-8'
            />
          </div>
        </div>
      </section>
      {/* ====== Search tour ========= */}
      <SearchTour />
      {/* ========= services ========== */}
      <div className='flex flex-col items-center space-y-4 mt-14 md:flex-row md:space-y-0 md:space-x-10'>
        <div className='flex flex-col items-center md:self-start justify-between md:min-w-[210px] h-full justify-self-end basis-ful md:items-start'>
          <h3 className='text-2xl text-red-500 font-cursive'>What we server</h3>
          <span className=' font-semibold text-[22px]'>We offer our best services</span>
        </div>
        <ServiceList />
      </div>

      {/* ========= feature tours section ========== */}
      <div className='mt-10 '>
        {/* ========= Section title ========== */}
        <span className='px-2 text-xl text-slate-900 rounded-xl font-cursive bg-primary-color'>
          Explore
        </span>
        <h3 className='mt-2 mb-6 text-[22px] font-semibold text-black'>Our feature tours</h3>

        {/* Gallery tours */}
        <CardList tours={tours} />
      </div>
    </div>
  )
}

export default Home

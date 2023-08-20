/* eslint-disable jsx-a11y/media-has-caption */
import {
  ExperienceImage,
  HeroImages1,
  HeroImages2,
  HeroVideo,
  WorldImages,
  galleryImg01,
  galleryImg02,
  galleryImg03,
  galleryImg04,
  galleryImg05,
  galleryImg06,
  galleryImg07,
  tourImg,
} from '@/assets'
import SearchTour from './SearchTour'
import ServiceList from './ServiceList'
import tours from '@/assets/data/tours'
import CardList from './CardList'
import Mansory from './Mansory'

type Props = {}

const images: MansoryImage[] = [
  { id: '01', url: galleryImg01, spanRows: 15 },
  { id: '02', url: galleryImg02, spanRows: 20 },
  { id: '03', url: galleryImg03, spanRows: 12 },
  { id: '04', url: galleryImg07, spanRows: 10 },
  { id: '05', url: galleryImg04, spanRows: 21 },
  { id: '06', url: galleryImg05, spanRows: 21 },
  { id: '07', url: galleryImg06, spanRows: 16 },
  { id: '08', url: tourImg, spanRows: 12 },
]

const Home = (props: Props) => {
  return (
    <div className='mt-8 md:mt-16 wrap'>
      {/* ======== Hero Section ============ */}
      <section className='flex flex-col justify-between px-1 space-y-6 md:space-x-3 lg:space-x-6 md:space-y-0 md:flex-row'>
        {/* ======== Left side ====== */}
        <div className='md:basis-[260px] md:flex-grow '>
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
            dignissimos illum temporibus, incidunt et vero tempora ad quaerat dolorum aut illo.
          </p>
        </div>

        {/* ======== Right side ====== */}
        <div className='flex-wrap  flex xs:flex-nowrap xs:space-x-3.5 md:space-x-1.5 lg:space-x-2 md:basis-1/2 md:flex-grow max-w-[808px] '>
          <div className='overflow-hidden basis-1/2 xs:basis-1/3 '>
            <img
              src={HeroImages1}
              alt='img1'
              className=' h-[200px]   xs:h-[350px] w-full rounded-xl object-cover   md:order-1'
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
      {/* ====== Search tour Section ========= */}
      <SearchTour />
      {/* ========= services section ========== */}
      <section className='flex flex-col items-center space-y-4 mt-14 md:flex-row md:space-y-0 md:space-x-10'>
        <div className='flex flex-col items-center md:self-start justify-between md:min-w-[210px] h-full justify-self-end basis-ful md:items-start'>
          <h3 className='text-2xl text-red-500 font-cursive'>What we server</h3>
          <span className=' font-semibold text-[22px]'>We offer our best services</span>
        </div>
        <ServiceList />
      </section>

      {/* ========= feature tours section ========== */}
      <section className='mt-10 '>
        {/* ========= Section title ========== */}
        <span className='px-2 text-xl text-slate-900 rounded-xl font-cursive bg-primary-color'>
          Explore
        </span>
        <h3 className='mt-2 mb-6 text-[22px] font-semibold text-black'>Our feature tours</h3>

        {/* Gallery tours */}
        <CardList data={tours} />
      </section>

      {/* ========= Expriece Section ========== */}
      <section className='flex items-center justify-start w-full mt-10 md:space-x-6'>
        {/* ========= left content ========== */}
        <div className='space-y-6  md:basis-1/2 w-full lg:max-w-[555px] xl:max-w-none max-w-none'>
          {/* ========= Text  ========== */}
          <span className='px-2 text-2xl rounded-xl bg-primary-color text-slate-950 font-cursive'>
            Experience
          </span>

          <h3 className='text-3xl font-semibold leading-[30px]'>
            With our all experience we will serve you
          </h3>

          <p className='font-semibold leading-6 tracking-tight text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, expedita? Mollitia,
            corporis sapiente.
          </p>

          {/* ========== Highlights ========= */}
          <div className='flex items-center justify-around mx-auto md:max-w-[494px] space-x-4 sm:space-x-6 md:space-x-8 sm:mx-0'>
            <div>
              <div className='flex items-center justify-center w-16 mx-auto my-1 text-xl font-semibold tracking-tight h-14 rounded-xl text-slate-50 bg-primary-color'>
                12k
                <span className='text-lg'>+</span>
              </div>

              <span className='text-sm font-bold tracking-tight whitespace-nowrap'>
                Successful trip
              </span>
            </div>
            <div>
              <div className='flex items-center justify-center w-16 mx-auto my-1 text-xl font-semibold tracking-tight h-14 rounded-xl text-slate-50 bg-primary-color '>
                2k
                <span className='text-lg'>+</span>
              </div>

              <span className='text-sm font-bold tracking-tight whitespace-nowrap'>
                Regular clients
              </span>
            </div>
            <div>
              <div className='flex items-center justify-center w-16 mx-auto my-1 text-xl font-semibold tracking-tight h-14 rounded-xl text-slate-50 bg-primary-color'>
                15
              </div>

              <span className='text-sm font-bold tracking-tight whitespace-nowrap'>
                Years experience
              </span>
            </div>
          </div>
        </div>

        {/* ========= Right image ========== */}
        <div className='hidden w-0 md:w-full md:block '>
          <img
            src={ExperienceImage}
            alt=''
            className='flex-1 hidden mx-auto md:basis-1/2 sm:block'
          />
        </div>
      </section>

      {/* ========= Gallery Image Section  ========== */}
      <Mansory data={images} imageWidth={250} />
    </div>
  )
}

export default Home

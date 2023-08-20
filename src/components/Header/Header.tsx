import React, { useMemo } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { RiMenuFill } from 'react-icons/ri'
import { IconContext } from 'react-icons'
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai'
import { MdOutlineTour } from 'react-icons/md'
import classNames from 'classnames'
import { LogoImages } from '@/assets'
import { useStore } from '@/store'

const navLink = [
  {
    path: '/',
    display: 'Home',
    icon: <AiOutlineHome size='24px' />,
  },
  {
    path: '/about',
    display: 'About',
    icon: <AiOutlineInfoCircle size='24px' />,
  },
  {
    path: '/tour',
    display: 'Tour',
    icon: <MdOutlineTour size='24px' />,
  },
]
const Header = () => {
  const location = useLocation()
  const { overlayActive, setOverlayActive } = useStore()

  return (
    // .flex.items-center
    <header className='sticky top-0 z-20 bg-white wrap '>
      <div className='flex items-center justify-between min-w-full '>
        {/* ========Logo =============== */}
        <img src={LogoImages} alt='' className='h-14 md:h-[66px]' />

        {/* =========Right menu============ */}
        <div className='flex items-center justify-between '>
          {/* ======= NavLink ======== */}
          <div
            className={classNames('menuList', {
              'translate-x-0  shadow-xl border border-slate-200': overlayActive,
              'translate-x-[100%] md:translate-x-0': !overlayActive,
            })}
          >
            {navLink.map((item, index) => (
              <div key={index}>
                <NavLink
                  to={item.path}
                  className={classNames(
                    'flex items-center duration-200 justify-between p-3 md:p-0 w-[176px] group  md:w-auto rounded-lg md:rounded-none md:bg-white mx-1.5 hover:bg-primary-color md:hover:bg-white',
                    {
                      'bg-primary-color': location.pathname === item.path,
                    }
                  )}
                  onClick={() => setOverlayActive(false)}
                >
                  <div className='block md:hidden '>
                    <IconContext.Provider
                      // eslint-disable-next-line react/jsx-no-constructed-context-values
                      value={{
                        className: classNames(
                          'group-hover:text-white ',
                          { 'text-white': location.pathname === item.path },
                          { 'text-heading-color': location.pathname === item.path }
                        ),
                      }}
                    >
                      {item.icon}
                    </IconContext.Provider>
                  </div>
                  <span
                    className={
                      location.pathname === item.path
                        ? 'font-[600] md:text-secondary-color  text-white text-[1.1rem]'
                        : 'font-[600] text-heading-color group-hover:text-white md:group-hover:text-secondary-color text-[1.1rem]  duration-200 '
                    }
                  >
                    {item.display}
                  </span>
                </NavLink>
              </div>
            ))}
          </div>

          {/* ======== Login Register ============= */}
          <div className='flex items-center justify-center mr-4 space-x-5 md:mr-0 '>
            <button type='button' className='font-[600]'>
              <Link to='/login'>Login</Link>
            </button>
            <button
              type='button'
              className='font-[600] text-white bg-primary-color rounded-full px-6 py-2 hover:-translate-y-1 hover:shadow-lg  transition-all'
            >
              <Link to='/register'>Register</Link>
            </button>
          </div>

          {/* ========= Menu Icon ========== */}
          <IconContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
              className: 'ml-4 hover:text-secondary-color duration-150 block md:hidden',
            }}
          >
            <button
              type='button'
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                return setOverlayActive(true)
              }}
            >
              <RiMenuFill size='20px' />
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </header>
  )
}

export default Header

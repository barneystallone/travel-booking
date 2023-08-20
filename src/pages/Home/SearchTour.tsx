/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-constructed-context-values */
import classNames from 'classnames'
import React, { useRef } from 'react'
import { RiMapPin2Line, RiMapPinTimeLine, RiGroupLine } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from 'react-icons'

type Props = {}

const inputGroup = [
  {
    display: 'Location',
    placeholder: 'Where are you going?',
    icon: <RiMapPin2Line color='#ee6e6e' size='18px' />,
  },
  {
    display: 'Distance',
    placeholder: 'Distance k/m?',
    icon: <RiMapPinTimeLine color='#ee6e6e' size='18px' />,
  },
  {
    display: 'Max People',
    placeholder: '0',
    icon: <RiGroupLine color='#ee6e6e' size='18px' />,
  },
]

const SearchTour = (props: Props) => {
  const locationRef = useRef<HTMLInputElement>(null)
  const distanceRef = useRef<HTMLInputElement>(null)
  const maxPeopleRef = useRef<HTMLInputElement>(null)

  const handleSearch = () => {
    const data = {
      location: locationRef.current?.value,
      distance: distanceRef.current?.value,
      maxPeople: maxPeopleRef.current?.value,
    }
    console.log(data)
  }
  return (
    <div className='flex justify-center mt-6 md:justify-start'>
      <div className='flex flex-col items-center w-4/5 min-w-[360px] p-2 px-3 shadow-xl md:w-auto md:min-w-auto rounded-xl md:rounded-full md:flex-row '>
        {inputGroup.map((item, index) => (
          <div
            key={index}
            className={classNames(
              'flex items-center w-full md:w-auto justify-start  space-y-2 pb-2 md:pb-0 md:space-y-0 md:pr-5  space-x-4 ',
              {
                'md:border-r-2  border-slate-200   ': index < 2,
                'md:ml-4': index > 0,
              }
            )}
          >
            <div>{item.icon}</div>
            <div className='space-y-[2px] w-full '>
              <h3 className='font-semibold text-[14px] text-slate-600'>{item.display}</h3>
              <input
                placeholder={item.placeholder}
                type={`${index === 1 ? 'number' : 'text'}`}
                onKeyDown={(e) => {
                  if (e.key !== '-') return
                  e.preventDefault()
                }}
                className='w-full text-xs outline-none text-thin placeholder:text-xs placeholder:text-thin'
                ref={[locationRef, distanceRef, maxPeopleRef][index]}
              />
            </div>
          </div>
        ))}

        <div
          className='flex items-center justify-center w-full md:w-8 h-8 ml-0 rounded shadow bg-primary-color group duration-100 hover:bg-[#e87e13] hover:scale-105 md:hover:scale-110 hover:shadow-md'
          onClick={() => handleSearch()}
        >
          <AiOutlineSearch color='#ffffff' />
        </div>
      </div>
    </div>
  )
}

export default SearchTour

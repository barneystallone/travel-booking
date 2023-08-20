import React from 'react'
import { CardTour } from '@/components/Card'

interface ICardListProps {
  data: Tour[]
}

const CardList = ({ data }: ICardListProps) => {
  return (
    <div className='grid grid-cols-1 gap-3 xs:grid-cols-2 tablet:grid-cols-3 lg:grid-cols-4'>
      {data.map((tour) => (
        <CardTour {...tour} key={tour.id} />
      ))}
    </div>
  )
}

export default CardList

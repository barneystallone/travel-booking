import React from 'react'
import { CardTour, Tour } from '@/components/Card'

interface ICardListProps {
  tours: Tour[]
}

const CardList = ({ tours }: ICardListProps) => {
  return (
    <div className='grid grid-cols-1 gap-3 xs:grid-cols-2 tablet:grid-cols-3 lg:grid-cols-4'>
      {tours.map((tour) => (
        <CardTour {...tour} key={tour.id} />
      ))}
    </div>
  )
}

export default CardList

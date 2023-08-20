type Tour = {
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
  avgRating?: number
  photo: string
  featured: boolean
}

type MansoryImage = {
  id: string
  url: string
  spanRows: number
}

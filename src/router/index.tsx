import { Route, Routes as ReactRouters, Navigate } from 'react-router-dom'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Tours from '@/pages/Tours'
import Home from '@/pages/Home/Home'
import TourDetails from '@/pages/ToursDetails'

const Routes = () => {
  return (
    <ReactRouters>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/tour'>
        <Route index element={<Tours />} />
        <Route path=':id' element={<TourDetails />} />
      </Route>
      <Route path='*' element={<Navigate to='/about' />} />
    </ReactRouters>
  )
}

export default Routes

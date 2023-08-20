import Header from '../Header'
import Routes from '@/router'
import Footer from '../Footer'
import Overlay from '../Overlay'

const Layout = () => {
  return (
    <>
      <Overlay />
      <Header />
      <Routes />
      <Footer />
    </>
  )
}

export default Layout

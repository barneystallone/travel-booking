import classNames from 'classnames'
import { useStore } from '@/store'

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
const Overlay = () => {
  const { overlayActive, setOverlayActive } = useStore()

  return (
    <div
      onClick={() => setOverlayActive(false)}
      className={classNames('overlay absolute inset-0 bg-slate-800 z-20 duration-150', {
        'opacity-0 invisible ': !overlayActive,
        'opacity-40  visible': overlayActive,
      })}
    />
  )
}

export default Overlay

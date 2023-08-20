import { StateCreator, create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface OverlaySlice {
  overlayActive: boolean
  setOverlayActive: (status: boolean) => void
}

// eslint-disable-next-line import/prefer-default-export
// export const useOverlay = create<Overlay>()(
//   devtools((set) => ({
//     overlayActive: false,
//     setOverlayActive: (status) => set(() => ({ overlayActive: status })),
//   }))
// )
// eslint-disable-next-line import/prefer-default-export
export const createOverlaySlice: StateCreator<OverlaySlice, [], []> = (set) => ({
  overlayActive: false,
  setOverlayActive: (status) => set(() => ({ overlayActive: status })),
})

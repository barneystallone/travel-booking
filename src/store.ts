import { StateCreator, create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface OverlaySlice {
  overlayActive: boolean
  setOverlayActive: (status: boolean) => void
}

// ['zustand/devtools', never] => để set tham số thứ 3 trong hàm setState
const createOverlaySlice: StateCreator<
  OverlaySlice,
  [['zustand/devtools', never]],
  [],
  OverlaySlice
> = (set) => ({
  overlayActive: false,
  setOverlayActive: (status) => set(() => ({ overlayActive: status }), false, 'setOverlay'),
})

// eslint-disable-next-line import/prefer-default-export
export const useStore = create<OverlaySlice>()(
  devtools((...a) => ({
    ...createOverlaySlice(...a),
  }))
)
// export const useStore = create<OverlaySlice>()(
//   devtools((set) => ({
//     overlayActive: false,
//     setOverlayActive: (status) => set(() => ({ overlayActive: status })),
//   }))
// )

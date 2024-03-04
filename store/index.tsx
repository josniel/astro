/* eslint-disable no-unused-vars */
import { create } from 'zustand'

interface DefaultState {
  isConnected: boolean
  setIsConnected: (value: boolean) => void
}

const useStore = create<DefaultState>((set) => ({
  isConnected: false,
  setIsConnected: (value: boolean) =>
    set(() => ({
      isConnected: value,
    })),
}))

export default useStore

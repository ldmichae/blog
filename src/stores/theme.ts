import { atom } from 'nanostores'

export const themeStore = atom<'light' | 'dark'>('dark')

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface IUserState {
	NickName: string
	setNickName: (val: string) => void
}

export const useUser = create<IUserState>()(
	devtools(
		persist(
			(set) => ({
				NickName: '',
				setNickName: (val) => set({ NickName: val }),
			}),
			{ name: 'userStore' },
		),
	),
)

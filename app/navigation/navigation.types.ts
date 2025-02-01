import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined,
	Home: undefined,
	Favorites: undefined,
	Search: undefined,
	Profile: undefined,
	Cart: undefined
	Product: {
		slug: string
	}
}

export interface IRoutes{
	name: keyof TypeRootStackParamList,
	component:ComponentType,
}
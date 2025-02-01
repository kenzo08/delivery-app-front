import { IRoutes } from '@/navigation/navigation.types'
import Home from '@/components/screens/home/Home'
import Favorites from '@/components/screens/favorites/Favorites'
import Profile from '@/components/screens/profile/Profile'
import Search from '@/components/screens/search/Search'
import Cart from '@/components/screens/cart/Cart'

export const routes: IRoutes[] = [
	{
		name: 'Home',
		component: Home,
	},
	{
		name: 'Favorites',
		component: Favorites,
	},
	{
		name: 'Product',
		component: Profile,
	},
	{
		name: 'Search',
		component: Search,
	},
	{
		name: 'Profile',
		component: Profile,
	},
	{
		name: 'Cart',
		component: Cart,
	},
]
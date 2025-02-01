import React, { FC } from 'react'
import { TypeNavigate } from '@/components/ui/layout/bottom-menu/menu.interface'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { menuItems } from '@/components/ui/layout/bottom-menu/menu.data'
import MenuItem from '@/components/ui/layout/bottom-menu/MenuItem'

interface IBottomMenu{
	nav: TypeNavigate;
	currentRoute?: string;
}

const BottomMenu: FC<IBottomMenu> = props => {
	const {bottom} = useSafeAreaInsets()

	return (
		<View
			className={'pt-5 px-2 flex-row justify-between items-center w-full border-t border-t-solid border-t-[#bbbb] bg-white'}
			style={{
				paddingBottom: bottom+20
			}}
		>
			{menuItems.map((item, index) => (
				<MenuItem
					key={item.path}
					item={item} {...props}
				/>
			))}
		</View>
	)
}

export default BottomMenu
import { EnumAsyncStorage, IAuthResponse } from '@/types/auth.interface'
import { request } from '../api/request.api'
import { deleteTokensStorage, saveToStorage } from '@/services/auth/auth.helper'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthService = {
	async main (variant: 'login' | 'register', email: string, password: string){
		const response = await request<IAuthResponse>({
			method: 'POST',
			url: `/auth/${variant}`,
			data: { email, password }
		})

		if (response.accessToken){
			await saveToStorage(response)
		}

		return response
	},

	async logout(){
		await deleteTokensStorage()
		await AsyncStorage.removeItem(EnumAsyncStorage.USER)
	}
}
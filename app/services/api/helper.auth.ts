import { getItem, getItemAsync } from 'expo-secure-store'
import { EnumSecureStore, IAuthResponse } from '@/types/auth.interface'
import axios from 'axios'
import { API_URL } from '@/config/api.config'
import { saveToStorage } from '@/services/auth/auth.helper'

export const getNewTokens= async ()=>{
	try {
		const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
		const response = await axios.post<string,{data: IAuthResponse}>(
			API_URL+'/auth/login/access-token', {refreshToken},
			{
				headers: {
					'Content-Type': 'application/json',
				}
			}
		)

		if(response.data.accessToken)
			await saveToStorage(response.data)

		return response
	}catch (error) {

	}
}
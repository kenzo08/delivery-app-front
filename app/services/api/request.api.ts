import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import Toast from 'react-native-toast-message'
import { errorCatch } from '@/services/api/error.api'
import instance from '@/services/api/interceptors.api'

export const request = async <T>(config: AxiosRequestConfig)=>{
	const onSuccess = (response: AxiosResponse<T>)=> response.data
	const onError =(error: AxiosError<T>)=>{
		console.log(error)
		Toast.show({
			type: 'error',
			text1: 'Что-то пошло не так',
			text2: errorCatch(error)
		})
		return Promise.reject(error)

	}

	return instance(config).then(onSuccess).catch(onError)
}
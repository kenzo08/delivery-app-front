import { UseFormReset } from 'react-hook-form'
import { IAuthFormData } from '@/types/auth.interface'
import { useAuth } from '@/hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from '@/services/auth/auth.service'
import { useMemo } from 'react'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>)=>{
	const {setUser} = useAuth()

	const {mutate: loginSync, isPending: isLoginLoading} = useMutation({
		mutationKey: ['login'],
		mutationFn:({ email, password }: IAuthFormData)=>
			AuthService.main('login', email, password),
		onSuccess(data) {
			reset()
			setUser(data.user)
		}})



	const {mutate: registerSync, isPending: isRegisterLoading} = useMutation({
		mutationKey: ['login'],
		mutationFn:({ email, password }: IAuthFormData)=>
			AuthService.main('register', email, password),
		onSuccess(data) {
			reset()
			setUser(data.user)
		}})

	return useMemo(()=>({
		loginSync,
		registerSync,
		isLoading: isLoginLoading || isRegisterLoading
	}), [isLoginLoading, isRegisterLoading])
}
import { FC, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFormData } from '@/types/auth.interface'
import Loader from '@/components/ui/Loader'
import Button from '@/components/ui/button/Button'
import AuthField from '@/components/screens/auth/AuthField'
import { useAuthMutations } from '@/components/screens/auth/useAuthMutations'

const Auth: FC = () => {
const [ isReg, setIsReg ] = useState(false)


	const { handleSubmit, reset, control} = useForm<IAuthFormData>({
		mode: 'onChange',

	})

	const { isLoading, registerSync, loginSync }= useAuthMutations(reset)

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		if(isReg) registerSync(data)
		else loginSync(data)
	}

	return (
		<View className="mx-2 items-center justify-center h-full">
			<View className="w-9/12 max-w-[500px]">
				<Text className="text-center text-black text-3xl font-medium mb-8">
					{isReg ? 'Регистрация' : 'Войти'}
				</Text>
				{isLoading ? <Loader /> :
					(<>
						<AuthField control={control}/>
						<Button onPress={handleSubmit(onSubmit)}>
							{isReg ? 'Зарегистрироваться' : 'Войти'}
						</Button>
						<Pressable onPress={()=> setIsReg(!isReg)} className='mt-4'>
							<View className="text-black items-center text-base text-center mt-6 flex flex-col gap-2.5">
								<Text>{isReg ? 'Уже есть аккаунт? ' : 'Впервые здесь? '}</Text>
								<Text className="text-[#47AA52]">
									{isReg ? 'Войти' : 'Зарегистрироваться'}

								</Text>
							</View>
						</Pressable>
					</>)}
			</View>
		</View>
	)
}

export default Auth
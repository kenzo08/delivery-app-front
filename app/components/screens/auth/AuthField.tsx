import React, { FC } from 'react'
import { Control } from 'react-hook-form'
import { IAuthFormData } from '@/types/auth.interface'
import Field from '@/components/ui/field/Field'
import { validEmail } from '@/components/screens/auth/email.regex'


interface IAuthFields{
	control: Control<IAuthFormData>

}

const AuthField:FC<IAuthFields> = ({control}) => {
	return (
		<>
		<Field<IAuthFormData>
			control={control}
			name='email'
			placeholder='Укажите email'
			rules={{
				required: 'Это поле обязательное',
				pattern:
					{
						value: validEmail,
						message: 'Укажите валидную почту'
					},
			}}
			keyboardType={'email-address'}
		/>
			<Field<IAuthFormData>
				control={control}
				name='password'
				secureTextEntry
				placeholder='Укажите пароль'
				rules={{
					required: 'Это поле обязательное',
					minLength:
						{
							value: 6,
							message: 'Пароль должен быть больше 5ти символов'
						},
				}}
			/>
		</>
	)
}

export default AuthField
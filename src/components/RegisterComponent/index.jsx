import React, {useEffect, useState} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import Input from "../common/Input";
import CustomButton from "../common/CustomButton";
import Container from "../common/Container";
import styles from "./styles"
import {useNavigation} from "@react-navigation/native";
import {LOGIN} from "../../constants/routeNames";
import Message from "../common/Message";

export const RegisterComponent = ({loading, error, form, errors, onChange, onSubmit}) => {
	const {navigate} = useNavigation()
	const [isSecurePassword, setIsSecurePassword] = useState(true)

	const showPasswordToggle = () => {
		setIsSecurePassword((prev) =>!prev);
	}
	// if (error) {
	// 	console.log(error)
	// }

	return (
		<Container>
			<Image source={require("../../assets/images/logo.png")} style={styles.logoImage}/>
			<View>

				<Text style={styles.title}>Добро пожаловать в RNКонтакты</Text>
				<Text style={styles.subtitle}>Создайте аккаунт</Text>

				<View style={styles.form}>
					{error?.error && <Message retry retryFn={() => {console.log("retry")}} message={error?.error} danger/>}
					<Input
						label="Ник"
						value={form.userName}
						error={errors.userName||error?.username?.[0]}
						onChangeText={(value) => {
							onChange({name: "userName", value: value})
						}}
						placeholder="Введите ник..."
					/>
					<Input
						label="Имя"
						value={form.firstName}
						onChangeText={(value) => {
							onChange({name: "firstName", value: value})
						}}
						error={errors.firstName||error?.first_name?.[0]}
						placeholder="Введите имя..."
					/>
					<Input
						label="Фамилия"
						value={form.lastName}
						error={errors.lastName||error?.last_name?.[0]}
						onChangeText={(value) => {
							onChange({name: "lastName", value: value})
						}}
						placeholder="Введите фамилию..."
					/>
					<Input
						label="Почта"
						value={form.email}
						error={errors.email||error?.email?.[0]}
						onChangeText={(value) => {
							onChange({name: "email", value: value})
						}}
						placeholder="Введите почту..."
					/>
					<Input
						label="Пароль"
						value={form.password}
						onChangeText={(value) => {
							onChange({name: "password", value: value})
						}}
						icon={<TouchableOpacity onPress={() => showPasswordToggle()}>
							<Text>{isSecurePassword ? "Показать" : "Спрятать"}</Text>
						</TouchableOpacity>}
						secureTextEntry={isSecurePassword}
						iconPosition="right"
						placeholder="Введите пароль..."
						error={errors.password ||error?.password?.[0]}
					/>
					<CustomButton loading={loading} disabled={loading} onPressButton={() => onSubmit()} primary title="Подтвердить" />
				</View>
				<View style={styles.registerBlock}>
					<Text style={styles.registerInfo}>Уже есть аккаунт?</Text>
					<TouchableOpacity onPress={() => navigate(LOGIN)}>
						<Text style={styles.registerBtn}>Вход</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Container>
	);
}

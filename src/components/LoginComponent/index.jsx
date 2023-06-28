import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import Input from "../common/Input";
import CustomButton from "../common/CustomButton";
import Container from "../common/Container";
import styles from "./styles"
import {useNavigation} from "@react-navigation/native";
import {REGISTER} from "../../constants/routeNames";
import colors from "../../assets/theme/colors";
import Message from "../common/Message";

export const LoginComponent = ({onSubmit, form, error, loading, onChange}) =>   {
	const {navigate} = useNavigation()
	return (
		<Container>
			<Image source={require("../../assets/images/logo.png")} style={styles.logoImage}/>
			<View>

				<Text style={styles.title}>Добро пожаловать в RNКонтакты</Text>
				<Text style={styles.subtitle}>Вход в приложение</Text>

				<View style={styles.form}>
					{error && !error.error && <Message onDismiss={() => {}} danger message={"Неверные учетные данные"}/>}
					{error?.error && <Message onDismiss message={error?.error} danger/>}
					<Input
					label="Имя пользователя"
					value={form.username}
					onChangeText={(value) => {
						onChange({name: "userName", value: value})
					}}
					// icon={<Text>HIDE</Text>}
					// iconPosition="right"
					placeholder="Введите имя..."
					// error="Это поле обязательное"
				/>
					<Input
						label="Пароль"
						value={form.password}
						onChangeText={(value) => {
							onChange({name: "password", value: value})
						}}
						icon={<Text>Show</Text>}
						secureTextEntry={true}
						iconPosition="right"
						placeholder="Введите пароль..."
						// error="Это поле обязательное"
					/>
					<CustomButton
						disabled={loading}
						primary
						loading={loading}
						title="Подтвердить"
						onPressButton={onSubmit}
					/>
				</View>
				<View style={styles.registerBlock}>
					<Text style={styles.registerInfo}>Нужен новый аккаунт?</Text>
					<TouchableOpacity onPress={() => navigate(REGISTER)}>
						<Text style={styles.registerBtn}>Регистрация</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Container>
	);
}

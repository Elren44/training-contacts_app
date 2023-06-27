import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import Input from "../common/Input";
import CustomButton from "../common/CustomButton";
import Container from "../common/Container";
import styles from "./styles"
import {useNavigation} from "@react-navigation/native";
import {LOGIN} from "../../constants/routeNames";

export const RegisterComponent = ({form, errors, onChange, onSubmit}) => {
	const {navigate} = useNavigation()
	return (
		<Container>
			<Image source={require("../../assets/images/logo.png")} style={styles.logoImage}/>
			<View>

				<Text style={styles.title}>Добро пожаловать в RNКонтакты</Text>
				<Text style={styles.subtitle}>Создайте аккаунт</Text>
				<View style={styles.form}>
					<Input
						label="Ник"
						value={form.userName}
						error={errors.userName}
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
						error={errors.firstName}
						placeholder="Введите имя..."
					/>
					<Input
						label="Фамилия"
						value={form.lastName}
						error={errors.lastName}
						onChangeText={(value) => {
							onChange({name: "lastName", value: value})
						}}
						placeholder="Введите фамилию..."
					/>
					<Input
						label="Почта"
						value={form.email}
						error={errors.email}
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
						icon={<Text>Show</Text>}
						secureTextEntry={true}
						iconPosition="right"
						placeholder="Введите пароль..."
						error={errors.password}
					/>
					<CustomButton onPressButton={onSubmit} primary title="Подтвердить" />
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

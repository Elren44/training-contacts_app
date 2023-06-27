import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import Input from "../common/Input";
import CustomButton from "../common/CustomButton";
import Container from "../common/Container";
import styles from "./styles"
import {useNavigation} from "@react-navigation/native";
import {REGISTER} from "../../constants/routeNames";
import colors from "../../assets/theme/colors";

export const LoginComponent = ({value, onChangeText}) => {
	const {navigate} = useNavigation()
	return (
		<Container>
			<Image source={require("../../assets/images/logo.png")} style={styles.logoImage}/>
			<View>

				<Text style={styles.title}>Добро пожаловать в RNКонтакты</Text>
				<Text style={styles.subtitle}>Вход в приложение</Text>
				<View style={styles.form}>
					<Input
					label="Имя пользователя"
					value={value}
					onChangeText={text => onChangeText(text)}
					// icon={<Text>HIDE</Text>}
					// iconPosition="right"
					placeholder="Введите имя..."
					// error="Это поле обязательное"
				/>
					<Input
						label="Пароль"
						value={value}
						onChangeText={text => onChangeText(text)}
						icon={<Text>Show</Text>}
						secureTextEntry={true}
						iconPosition="right"
						placeholder="Введите пароль..."
						// error="Это поле обязательное"
					/>
					<CustomButton primary title="Подтвердить" onPressButton={() => {
					}}/>
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

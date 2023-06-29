import React from 'react'
import {Alert, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import Container from "../../components/common/Container";
import styles from "./styles";
import {SETTINGS} from "../../constants/routeNames";
import logoutUser from "../../context/actions/auth/logoutUser";
import colors from "../../assets/theme/colors";
import {Icon} from "../../components/common/Icon";

export const SideMenu = ({navigation, authDispatch}) => {

	const handleLogout = () => {
		navigation.toggleDrawer()
		Alert.alert("Выход", "Вы уверены, что хотите выйти?", [{
			text: "Отмена",
			onPress: () => {}
		}, {
			text: "Да",
			onPress: () => {
				logoutUser()(authDispatch)
			}
		}])
	}

	const menuItems = [
		{
			icon: <Icon type={"fontisto"} color={colors.text} name={"player-settings"} size={20}/>,
			name: "Настройки",
			onPress: () => {
				navigation.navigate(SETTINGS)
			}
		},
		{
			icon: <Icon type={"material"} color={colors.text} name={"logout"} size={20}/>,
			name: "Выход",
			onPress: handleLogout
		}
	]

	return (
		<SafeAreaView>
			<Container>
				<Image source={require("../../assets/images/logo.png")} style={styles.logoImage}/>
				<View style={{alignItems: "center", paddingRight: 20}}>
					{
						menuItems.map(({name, icon, onPress}) => (
							<TouchableOpacity onPress={onPress} key={name} style={styles.item}>
								{icon}
								<Text style={styles.itemText}>{name}</Text>
							</TouchableOpacity>
						))
					}
				</View>
			</Container>
		</SafeAreaView>
	)
}

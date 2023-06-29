import React from 'react'
import {Text, View} from 'react-native'
import Material from "react-native-vector-icons/MaterialIcons"
import Fontisto from "react-native-vector-icons/Fontisto"
import FAIcon from "react-native-vector-icons/FontAwesome"

const getIconFont = (type) => {
	switch (type) {
		case "fontisto":
			return Fontisto
		case "material":
			return Material
		default:
			return FAIcon
	}
}

export const Icon = ({type, ...props}) => {
	const FontIcon = getIconFont(type)

	return <FontIcon {...props}/>
}
